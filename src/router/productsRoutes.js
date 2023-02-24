const express = require('express');
const router = express.Router();
const upload = require('../middlewares/imagesMulter')
const productsController = require('../controllers/productsController')

//--------------- Rutas-----------------//
router.get('/fav', productsController.favorite)
router.get('/cart', productsController.cart)
router.get('/:id/detail', productsController.detail)
router.get('/', productsController.products)
router.get('/create',productsController.create)
router.post('/create',  upload.any('image',5),productsController.creation)
router.get('/:id/edit', productsController.edit)
router.put('/:id/edit', upload.any('image',5), productsController.edition)
router.delete('/:id/delete',productsController.delete)

// exportacion de rutas
module.exports = router