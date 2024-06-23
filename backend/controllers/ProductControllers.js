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

const addProduct = (req, res) => {
    const { name, price } = req.body;

    const newProduct = new Product({ name, price });

    newProduct.save()
    .then(product => {
        res.status(201).json({ message: 'Product added successfully', product });
    })
    .catch(err => {
        console.log(err.message);
        res.status(500).json({ error: 'Internal Server Error' });
     })

}

module.exports = { getProducts, addProduct };