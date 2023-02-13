const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController')

//--------------- Rutas-----------------//
router.get('/fav', productsController.favorite)
router.get('/cart', productsController.cart)
router.get('/detail', productsController.detail)
router.get('/', productsController.products)
router.get('/create', productsController.create)
router.post('/products', productsController.products)
/* ------------------SPRINT 4 ------------ 11.02.2023 --- Anto, Jose, Romi */ 

// router.get('/products/:id', productsController.productDetail)


// router.get('/products/:id/edit', productsController.productEdit)
// router.put('/products/:id', productsController, productEdit)
// router.delete('/products/:id', productsController, productEdit)

// exportacion de rutas
module.exports = router