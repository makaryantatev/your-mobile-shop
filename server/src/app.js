require('dotenv').config();
const express = require("express")
const app = express()
const PORT = 3001
const cors = require("cors")
const body = require("body-parser")
const mongoose = require('mongoose')
const db = "mongodb://127.0.0.1:27017/project"
const fileUpload = require('express-fileupload');
const fs = require('fs');
const path = require('path');
const uploadsPath = path.join(path.resolve(), 'uploads');

if (!fs.existsSync(uploadsPath)) {
  fs.mkdirSync(uploadsPath, { recursive: true });
}


app.use(cors())
app.use(body.json())
app.use(fileUpload())
app.use('/uploads', express.static(uploadsPath));


mongoose.connect(db)
.then(() => console.log("connect db"))
.catch(err => console.log(err))

app.use('/api/auth', require('./routes/auth'));
app.use('/api/product', require('./routes/product'));
app.use('/api/basket', require('./routes/basket'));
app.use('/api/eachPhone', require('./routes/eachPhone'));



app.listen(PORT, () => console.log(`server running on port ${PORT}`))


