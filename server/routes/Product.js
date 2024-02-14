const express = require('express')
const {addProduct,getProductByName,deleteProductByName,updateProduct} =require('../controllers/Product.js');

const router = express.Router();

router.post('/product', addProduct)
router.get('/product', getProductByName)
router.delete('/product',deleteProductByName)
router.put('/product',updateProduct)

module.exports = router