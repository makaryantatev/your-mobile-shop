const express = require('express');
const { PhoneModel } = require('../model/product');
const router = express.Router()
const path = require("path")
const fs = require('fs');
const authMiddleware = require('../middleware/authMiddleware');


router.post('/', async (req, res) => {
  try {
    if (!req.files || !req.files.image) {
      return res.status(400).json({ message: 'Image file is required' });
    }
    
    const image = req.files.image;
    const updateImage = Date.now() + image.name
    const uploadPath = path.join(path.resolve(), '/uploads', updateImage);
    
    await image.mv(uploadPath);

    const newPhone = new PhoneModel({
      name: req.body.name,
      brand: req.body.brand,
      price: req.body.price,
      imageUrl: updateImage
    });

    await newPhone.save();
    res.status(201).json(newPhone);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const phones = await PhoneModel.find();
    res.status(200).json(phones);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


router.delete('/:id', authMiddleware, async (req, res) => {
  console.log(req.user);
  
  if(req.user.userId !== "admin"){
    return res.status(403).json({error: "Only admin can delete the phones"})
  }
  try {
    const phone = await PhoneModel.findById(req.params.id);
    if (!phone) {
      return res.status(404).json({ message: 'Phone not found' });
    }

    const imagePath = path.join(path.resolve(), '/uploads', phone.imageUrl);
    if (fs.existsSync(imagePath)) {
      fs.unlinkSync(imagePath);
    }

    await PhoneModel.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Phone deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }

});

module.exports = router