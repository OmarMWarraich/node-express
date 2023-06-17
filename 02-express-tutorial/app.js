const express = require('express');
const app = express();
const { products } = require('./data');

app.get('/', (req, res) => {
    res.send('<h1>Home Page</h1><a href="/api/products">products</a>');
});

app.get('/api/products/:productId', (req, res) => {
    const { productId } = req.params;
    const singleProduct = products.find((product) => product.id === Number(productId));
    if (!singleProduct) {
        return res.status(404).send('Product Does Not Exist');
    }
    return res.json(singleProduct);
});

app.get('/api/products/:productId/reviews/:reviewId', (req, res) => {
    console.log(req.params);
    res.send('hello world');
});

app.listen(5000, () => {
    console.log('Server is listening on port 5000...');
});

