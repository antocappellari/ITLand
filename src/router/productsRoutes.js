const express = require('express');
const router = express.Router();
const upload = require('../middlewares/imagesMulter')
const productsController = require('../controllers/productsController')
const productValidator = require('../middlewares/productValidatorMdd.js')
const isAdmin = require('../middlewares/isAdmin.js');

//--------------- Rutas-----------------//
router.get('/fav', productsController.favorite)
router.get('/cart', productsController.cart)
router.get('/about', productsController.about)
router.get('/:id/detail', productsController.detail)
router.get('/',productsController.products)

router.get('/create',isAdmin,productsController.create)
router.post('/create',isAdmin, upload.any('image',5),productValidator,productsController.creation)
router.get('/:id/edit', isAdmin,productsController.edit)
router.put('/:id/edit',isAdmin, upload.any('image',5),productValidator[8], productsController.edition)
router.delete('/:id/delete',isAdmin,productsController.delete)

// exportacion de rutas
module.exports = router