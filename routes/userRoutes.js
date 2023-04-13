const express = require('express');
const {createUser, getUsers, editUser, deleteUser, login, getUserVerify} = require('../controllers/userController');
const auth = require('../middleware/auth');

const userRouter = express.Router();

userRouter.route('/user')
    .post(createUser)
    .get(getUsers)

userRouter.route('/user/delete')
    .delete(auth, deleteUser)

userRouter.route('/user/signin')
    .post(login)


userRouter.route('/user/verifyUSer')
    .get(auth, getUserVerify)


userRouter.route('/user/myProfile')
    .put(auth, editUser)


module.exports = userRouter;