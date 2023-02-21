const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController')
const productsController = require('../controllers/productsController')

//--------------- Rutas-----------------//
router.get('/', mainController.index)
router.get('/detail/:id?', productsController.productDetail)

// exportacion de rutas
module.exports = router