const mongoose = require('mongoose')

const studentSchema = new mongoose.Schema({
    studentID:String,
    firstName: String,
    lastName: String,
    dateOfBirth: String,
    gender: String,
    program:String
}, {
    timestamps: true
})

module.exports = mongoose.model('student', studentSchema)