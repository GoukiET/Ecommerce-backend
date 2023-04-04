const User = require("../models/User");

const createUser = async (req, res) => {
  try {
    const newUSer = new User(req.body);
    await newUSer.save();

    res.json({ success: true, message: "Usuario creado", info: newUSer });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

const getUsers = async(req, res) => {
    try {
        const users = await User.find();
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
        res.json({success: true, message: "Usuario Actualizado", updateUser}) 
    } catch (error) {
        res.status(500).json({success: false, message: error.message})
    }
};
module.exports = {createUser, getUsers, editUser};
