const express = require('express');
const router = express.Router()
const { PhoneModel } = require('../model/product');
const { UserModel } = require('../model/user');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/:id', authMiddleware, async (req, res) => {
    const user = await UserModel.findById(req.user.userId)
    const {id} = req.params

    if(!user.basket.includes(id)) {
        user.basket.push(id)
        await user.save()
        res.status(200).json({data: 'success'})
    } else {
        res.status(400).json({data: 'phone already in the basket'})
    }
})

router.get('/', authMiddleware, async (req, res) => {
    try {
        const user = await UserModel.findById(req.user.userId)
        const products = await PhoneModel.find({ '_id': { $in: user.basket } });

        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.delete('/', authMiddleware, async (req, res) => {
    try {
        const user = await UserModel.findById(req.user.userId);
        
        user.basket = [];
        await user.save();

        res.status(200).json({ message: "Basket cleared successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.delete('/:id', authMiddleware, async (req, res) => {
   try {
    const user = await UserModel.findById(req.user.userId);
    const arr = user.basket
    const result = arr.filter(e => e != req.params.id)
    user.basket = result
    await user.save()
    res.status(200).json({ message: 'Phone deleted successfully' });
    } catch (error) {
       res.status(500).json({ error: error.message });
     }
});


module.exports = router