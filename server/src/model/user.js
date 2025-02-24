const mongoose = require('mongoose')
const Schema = mongoose.Schema
const userSchema = new Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    name: { type: String, required: true },
    surName: { type: String, required: true },
    isVerified: { type: Boolean, default: false },
    basket: {type: Array},
    verificationCode: String
  });

const UserModel = mongoose.model('user', userSchema)
module.exports.UserModel = UserModel