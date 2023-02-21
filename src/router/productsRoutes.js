const express = require('express');
const { productEdit } = require('../controllers/productsController');
const router = express.Router();
const productsController = require('../controllers/productsController')

//--------------- Rutas-----------------//
router.get('/fav', productsController.favorite)
router.get('/cart', productsController.productCart)
router.get('/detail/:id?', productsController.productDetail)
router.get('/', productsController.products)
router.get('/create', productsController.productCreate)
router.post('/create', productsController.productCreation)
router.get('/:id/edit', productsController.productEdit)
router.put('/:id/edit', productsController.productEdition)
router.post('/', productsController.search)

/* ------------------SPRINT 4 ------------ 11.02.2023 --- Anto, Jose, Romi */ 

// router.get('/products/:id', productsController.productDetail)
// router.post('/products', productsController.products)
// router.get('/products/:id/edit', productsController.productEdit)
// router.put('/products/:id', productsController, productEdit)
// router.delete('/products/:id', productsController, productEdit)
// exportacion de rutas
module.exports = router