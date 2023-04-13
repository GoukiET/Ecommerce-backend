const express = require('express');
const auth = require('../middleware/auth');
const {getProducts, createProduct, getProductById, editProduct, deleteProduct} = require('../controllers/productController');

const productRouter = express.Router()

productRouter.route('/product')
    .post(auth, createProduct)
    .get(getProducts)

productRouter.route('/products/:productId')
    .get(getProductById)

productRouter.route('/admin/products/:productId')
    .put(/* auth */ editProduct)
    .delete(/* auth */ deleteProduct)
module.exports = productRouter;