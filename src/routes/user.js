const {Router} = require('express');
const { getAllUsers } = require('../contollers/user');

const userRouter = Router();

// route to get all users from the db
userRouter.get('/', getAllUsers)


module.exports = userRouter