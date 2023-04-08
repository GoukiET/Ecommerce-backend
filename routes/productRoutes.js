const express = require('express');
const {getProducts, createProduct} = require('../controllers/productController');

const productRouter = express.Router()

productRouter.route('/product')
    .post(createProduct)
    .get(getProducts)

module.exports = productRouter;