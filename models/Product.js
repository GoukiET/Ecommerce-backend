const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    SKU: {
        type: String,
        required: true,
        minLength: 5,
        maxLength: 5
    },
    albumName: {
        type: String,
        required: true,
        uppercase: true,
        trim: true
    },
    bandName: {
        type: String,
        required: true,
        uppercase: true,
        trim: true
    },    
    description: {
            type: String,
            required: true,
            trim: true
    },
    origin: {
        type: String,
        required: true,
        trim: true
    },
    label:{
        type: String,
        required: true,
        trim: true
    },    
    price: {
        type: Number,
        require: true,
        min: 0
    },
    format: {
        type: String,
        require: true
    },
    img: {
        type: String
    },
    stock: {
        type: Number,
        require: true,
        min: 0
    }
})

const Product = mongoose.model("product", productSchema);

module.exports = Product;