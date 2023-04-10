const User = require("../models/User");
const crypto = require('crypto');


const createUser = async (req, res) => {
  try {
    const userEmail = await User.findOne({email: req.body.email})
    if(userEmail){
        throw new Error('Email en uso')
    }

    const newUser = new User(req.body);
    newUser.hashPassword(req.body.password);
    await newUser.save();

    res.json({ success: true, message: "Usuario creado", info: newUser._id, token: newUser.generateToken()});
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

const getUsers = async(req, res) => {
    try {
        const users = await User.find().populate('favoriteProducts');
        res.json({success: true, info: users})
    } catch (error) {
        res.json({ success: false, message: error.message });
    }
};

const editUser = async(req, res) => {
   
    try {
        const {id} = req.params;
        const contain = req.body;
        const updateUser = await User.findByIdAndUpdate(id, contain, {new: true});
        res.json({success: true, message: "Usuario Actualizado", updateUser}); 
    } catch (error) {
        res.status(500).json({success: false, message: error.message});
    }
};

const deleteUser = async(req, res) => {
    try {
        const {id} = req.params;
        const destroyUser = await User.findByIdAndDelete(id);
        res.json({success: true, message: "Usuario eliminado", destroyUser});
    } catch (error) {
        res.status(500).json({success: false, message: error.message});
    }
};

const login = async(req, res) =>{

    try {
        const {email, password} = req.body;

        const user = await User.findOne({ email })

        if(!user){
            throw new Error('Usuario no registrado')
        }

        const validatePassword = user.hashValidation(password, user.salt, user.password)

        if(!validatePassword){
            throw new Error('Email o Contraseña incorrecta')
        }

        res.json({success: true, message: 'Has iniciado sesion', token: user.generateToken()})
    } catch (error) {
        res.status(500).json({success: false, message: error.message})
    }


}


module.exports = {createUser, getUsers, editUser, deleteUser, login};
