const express = require('express');
const auth = require('../middleware/auth');
const {getProducts, createProduct, getProductById} = require('../controllers/productController');

const productRouter = express.Router()

productRouter.route('/product')
    .post(createProduct)
    .get(getProducts)

productRouter.route('/products/:productId')
    .get(getProductById)

productRouter.route('/admin/products/:productId')
    .put(auth)
    .delete(auth)
module.exports = productRouter;