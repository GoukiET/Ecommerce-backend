const express = require('express');
const {createUser, getUsers, editUser, deleteUser} = require('../controllers/userController');

const userRouter = express.Router();

userRouter.route('/user')
    .post(createUser)
    .get(getUsers)

userRouter.route('/user/:id')
    .put(editUser)
    .delete(deleteUser)

userRouter.route('/user/signin')
    .post()
    
module.exports = userRouter;