const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

require('dotenv').config();
const productRoutes = require('./routes/ProductRoutes');

app.use(cors());

app.use('/api/products', productRoutes);

const port = process.env.PORT||8000;

mongoose.connect(process.env.URI)
    .then(()=>{

        app.listen(port, () => {
            console.log(`Connected to Mongoose...`);
        })
    })
    .catch(err=>{
        console.log(err.message);
    })
