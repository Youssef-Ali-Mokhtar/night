const productModel = require('../models/ProductModel');

const getProducts = (req, res) => {
    res.json({ products: productModel.getProducts() });
}

module.exports = { getProducts };