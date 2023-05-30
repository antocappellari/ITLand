const express = require('express');
const apiProduct = require('../../controllers/api/apiProducts');

const router = express.Router();
router.get('/',apiProduct.getAllProducts);
router.get('/product/:productId',apiProduct.getProduct);
router.post('/create',apiProduct.createProduct);
router.put('/update/:productId',apiProduct.update);
router.delete('/delete/:productId',apiProduct.delete);
router.get('/list',apiProduct.productlist);
router.get('/search',apiProduct.search);
router.get('/filtered',apiProduct.filtered);


module.exports = router