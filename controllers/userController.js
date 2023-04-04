const createUser = (req, res) => {
    const user = req.body;

    res.json({success: true, message: "Usuario creado", info: user})
}

module.exports = createUser;