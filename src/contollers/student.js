const student = require("../models/student")


exports.getAllStudents = (req, res) => {
    student.find().then(response => {
        return res.status(200).json({
            success: true,
            data: response
        })
    }).catch(error => {
        return res.status(400).json({
            success: false,
        })
    })
}