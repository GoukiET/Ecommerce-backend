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

module.exports = createUser;
