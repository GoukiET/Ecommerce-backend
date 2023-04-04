const express = require('express');
const createUser = require('../controllers/userController');

const userRouter = express.Router();

userRouter.route('/user')
    .post(createUser)
    .get()

module.exports = userRouter;