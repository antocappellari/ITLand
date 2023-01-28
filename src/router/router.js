const express = require('express');
const router = express.Router();
const controller = require('../controllers/controller')

//--------------- Rutas-----------------//
router.get('/', controller.index)
router.get('/abautUs', controller.aboutUs)
router.get('/contact', controller.contact)
router.get('/favorites', controller.favorite)
router.get('/login', controller.login)
router.get('/productCart', controller.productCart)
router.get('/productDetail', controller.productDetail)
router.get('/products', controller.products)
router.get('/register', controller.register)


// exportacion de rutas
module.exports = router