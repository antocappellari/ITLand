const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController')

//--------------- Rutas-----------------//
router.get('/fav', productsController.favorite)
router.get('/productCart', productsController.productCart)
router.get('/productDetail', productsController.productDetail)
router.get('/products', productsController.products)
router.get('/productCreate', productsController.productCreate)

// exportacion de rutas
module.exports = router