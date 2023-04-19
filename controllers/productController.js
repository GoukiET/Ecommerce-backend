const Product = require('../models/Product');
const User = require('../models/User');

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
};


const createProduct = async(req, res) => {
    try {
        const user = await User.findById(req.auth.id);
        if(!user.isAdmin){ //Si no es admin
            throw new Error('No tienes acceso')
        }

        const newProduct = new Product(req.body);
        //* Guarda informacion en la base de datos
        await newProduct.save();

        res.json({success: true, message: "Producto Creado", info: newProduct});
    } catch (error) {
        res.status(500).json({success: false, message: error.message});
    }
};


const editProduct = async(req, res) =>{
    const {productId} = req.params;
    try {
        /* const user = await User.findById(req.auth.id);
        if(!user.isAdmin){ //Si no es admin
            throw new Error('No tienes acceso')
        } */
        const product = await Product.findByIdAndUpdate(productId, req.body, {new: true});

        res.json({success: true, message: "Producto editado con existo", updateInfo: product})
    } catch (error) {
        res.status(500).json({success: false, message: error.message});
    }
};

const deleteProduct = async(req, res) => {
    const {productId} = req.params;
    try {
        /* const user = await User.findById(req.auth.id);
        if(!user.isAdmin){ //Si no es admin
            throw new Error('No tienes acceso')
        } */
        const product = await Product.findByIdAndDelete(productId);

        res.json({success: true, message: "Producto eliminado", deleteProduct: product})
    } catch (error) {
        res.status(500).json({success: false, message: error.message});
    }
};


const reduceStock = async(req, res) => {
    const productosComprado = req.body.cartItems;
    try {
        productosComprado.map(async(producto) => {
            await Product.findByIdAndUpdate(producto._id, {stock: producto.stock - producto.quantity})
        })
    res.json({msg: "Se ha reducido el stock de los producyos", success: true})

    } catch (error) {
        res.status(500).json({success: false, message: error.message});
    }
}
module.exports = {createProduct, getProducts, getProductById, editProduct, deleteProduct, reduceStock}