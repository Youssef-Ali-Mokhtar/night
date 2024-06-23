const Product = require('../models/ProductModel');

const getProducts = (req, res) => {
    console.log("HEY");

    Product.find()
        .then(data=>{
            console.log(data);
            res.json(data);
        })
        .catch(err => {
            console.log(err.message);
            res.status(500).json({ error: 'Internal Server Error' });
         })
}

module.exports = { getProducts };