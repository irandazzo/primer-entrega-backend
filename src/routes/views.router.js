import express from 'express'
/* import  ProductManager from '../managers/ProductManager.js'; */
import fs from 'fs';
import { io } from '../apps.js';

const router= express.Router();
/* const manager = new ProductManager('./src/data/products.json') */

/* router.get('/', (req, res) => {

    const data = fs.readFileSync('./src/data/products.json', 'utf-8');
    console.log(data);
    const products = JSON.parse(data);
    console.log(products);
    socketServer.emit('updateProducts', products)
    res.render('realTimeProducts', { products });
}); */
router.get('/',(req,res)=>{
    res.render('index',{})
})

export default router;