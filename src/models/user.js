const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    dateOfBirth: String,
    gender: String
}, {
    timestamps: true
})

module.exports = mongoose.model('User', userSchema)