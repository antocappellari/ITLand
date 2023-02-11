const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController')

//--------------- Rutas-----------------//
router.get('/fav', productsController.favorite)
router.get('/cart', productsController.productCart)
router.get('/detail', productsController.productDetail)
router.get('/products', productsController.products)
router.get('/create', productsController.productCreate)

// exportacion de rutas
module.exports = router