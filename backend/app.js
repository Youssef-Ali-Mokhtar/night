const express = require('express');
const cors = require('cors');
const app = express();
const productRoutes = require('./routes/ProductRoutes');

app.use(cors());

app.use('/api/products', productRoutes);

app.listen('4000', () => {
    console.log('Server is running on port 4000...');
})