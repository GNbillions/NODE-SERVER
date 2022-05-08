const {Router} = require('express');
const { getAllStudents } = require('../contollers/student');

const studentRouter = Router();

// route to get all students from the db
studentRouter.get('/', getAllStudents)


module.exports = studentRouter
