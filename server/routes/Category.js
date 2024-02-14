const express = require('express')
const {addCategory,listCategory,deleteCategory,updateCategory} =require('../controllers/Category.js');

const router = express.Router();

router.post('/category', addCategory)
router.get('/category', listCategory)
router.delete('/category',deleteCategory)
router.put('/category',updateCategory)


module.exports = router