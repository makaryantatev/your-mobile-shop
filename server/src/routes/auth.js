const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');
const authMiddleware = require('../middleware/authMiddleware');
const { UserModel } = require('../model/user');
const router = express.Router();

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});


router.post('/register', async (req, res) => {
    console.log(req.body);

    const { email, password, name, surName } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const verificationCode = Math.floor(100000 + Math.random() * 900000).toString();

    try {
        const user = new UserModel({ email, password: hashedPassword, verificationCode, name, surName });
        await user.save();
        console.log({
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        });

        await transporter.sendMail({
            to: email,
            subject: 'Email Verification',
            html: `Your verification code is: <b style='color:red'>${verificationCode}</b>`
        });
        res.status(201).json({ message: 'User registered. Check your email for verification code.' });
    } catch (error) {
        console.error("Error saving user:", error);
        res.status(400).json({ error: error.message });
    }
});


router.post('/verify', async (req, res) => {
    const { email, code } = req.body;
    const user = await UserModel.findOne({ email });
    console.log(req.body);

    if (user && user.verificationCode === code) {
        user.isVerified = true;
        user.verificationCode = undefined;
        await user.save()
        res.status(200).json({ message: 'Email verified successfully.' })
    } else {
        res.status(404).json({ error: 'Invalid verification code' })
    }

})

router.post('/login', async (req, res) => {
    console.log(req.body);

    const { email, password } = req.body;
    const user = await UserModel.findOne({ email });
    if (user && await bcrypt.compare(password, user.password)) {
        if (!user.isVerified) return res.status(403).json({ error: 'Email not verified.' });
        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '9h' });
        console.log(token);

        res.status(200).json({ token });
    } else {
        res.status(400).json({ error: 'Invalid credentials.' });
    }
});

router.post('/login/admin', async (req, res) => {
    console.log(req.body);
    
    const { login, password } = req.body;
    if (login === process.env.ADMIN_LOGIN && password === process.env.ADMIN_PASS) {
        const token = jwt.sign({ userId: login }, process.env.JWT_SECRET, { expiresIn: '9h' });
        res.json({ token })
    } else {
        res.status(400).json({ error: 'Invalid credentials.' });
    }
})

router.get("/profile/admin", authMiddleware, async (req, res) => {
    console.log(req.user);
    res.status(200).json({ login: req.user.userId })
})

router.get("/profile", authMiddleware, async (req, res) => {
    const user = await UserModel.findById(req.user.userId)
    res.json({email: user.email, name: user.name, surName: user.surName, isVerified: user.isVerified})
})

module.exports = router