const user = require("../models/student")


exports.getAllUsers = (req, res) => {
    user.find().then(response => {
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