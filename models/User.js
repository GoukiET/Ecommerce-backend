const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        default: "Nombre no ingresado",
        trim: true,
        lowercase: true,
        minLength: 2
    },
    lastName:{
        type: String,
        default: "Apellido no ingresado",
        trim: true,
        lowercase: true,
        minLength:2
    },
    email: {
        type: String,
        trim: true,
        match: [/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g],
        required: true
    },
    age: {
        type: Number,
        min: 16,
        max: 120
    },
    password: {
        type: String,
        match: [/^(?=.*\d)(?=.*[a-z])(?=.*[a-zA-Z]).{8,}$/gm],
        required: true
    },
    salt: String, 
    isAdmin:{
        type: Boolean,
        defaul: false
    },
    favoriteProducts:{
        type: mongoose.Types.ObjectId,
        ref: "product"
    }
})

const User = mongoose.model('user', userSchema);

module.exports = User;