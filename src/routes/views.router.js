import express from 'express'
import  ProductManager from '../managers/ProductManager.js';


const router= express.Router();
const manager = new ProductManager('./products.json')

router.get('/', (req, res) => {

    const data = readProducts('./data/products.json', 'utf-8');
    const products = JSON.parse(data);

    socketServer.emit('updateProducts', products)
    res.render('realTimeProducts', { products });
});

export default router;