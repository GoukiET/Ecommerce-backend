const Product = require('../models/Product');

const getProducts = async(req, res) => {
    try {
        const products = await Product.find()
        res.json({success: true, message: "Lista de productos", info: products});
    } catch (error) {
        res.status(500).json({success: false, message: error.message});
    }
};

const getProductById = async(req, res) => {
    const {productId} = req.params;
    try {
        const product = await Product.findById(productId);

        res.json({success: true, message: "Producto encontrado", info: product});
    } catch (error) {
        
    }
}


const createProduct = async(req, res) => {
    try {
        const newProduct = new Product(req.body);
        //* Guarda informacion en la base de datos
        await newProduct.save();

        res.json({success: true, message: "Producto Creado", info: newProduct});
    } catch (error) {
        res.status(500).json({success: false, message: error.message});
    }
};

module.exports = {createProduct, getProducts, getProductById}