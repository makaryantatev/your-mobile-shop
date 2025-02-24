const express = require('express');
const router = express.Router();
const { PhoneModel } = require('../model/product'); 

router.get('/:id', async (req, res) => {
    try {
        const phone = await PhoneModel.findById(req.params.id); 
        if (!phone) {
            return res.status(404).json({ message: "Phone not found" });
        }
        res.status(200).json(phone);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
