const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

app.get('/',(req, res, next) => {
    res.json({message:"Hey"});
})

app.listen('4000', () => {
    console.log('Server is running on port 4000...');
})