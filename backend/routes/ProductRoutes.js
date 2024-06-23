const express = require('express');
const route = express.Router();

const {
    getProducts,
    addProduct
} = require('../controllers/ProductControllers');



route.get('/', getProducts);
route.post('/', addProduct);

module.exports = route;