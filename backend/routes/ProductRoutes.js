const express = require('express');
const route = express.Router();

const {
    getProducts
} = require('../controllers/ProductControllers');



route.get('/', getProducts);

module.exports = route;