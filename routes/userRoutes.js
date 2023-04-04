const express = require('express');
const {createUser, getUsers, editUser} = require('../controllers/userController');

const userRouter = express.Router();

userRouter.route('/user')
    .post(createUser)
    .get(getUsers)

userRouter.route('/user/:id')
    .put(editUser)
    .get()
module.exports = userRouter;