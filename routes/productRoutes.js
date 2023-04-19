const express = require('express');
const auth = require('../middleware/auth');
const {getProducts, createProduct, getProductById, editProduct, deleteProduct, reduceStock} = require('../controllers/productController');

const productRouter = express.Router()

productRouter.route('/products')
    .post(auth, createProduct)
    .get(getProducts)

productRouter.route('/products/:productId')
    .get(getProductById)

productRouter.route('/admin/products/:productId')
    .put(/* auth */ editProduct)
    .delete(/* auth */ deleteProduct)

productRouter.route('/product/reduce-stock')
    .put(reduceStock)
module.exports = productRouter;