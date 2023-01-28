const express = require('express');
const router = express.Router();
const controller = require('../controllers/controller')

//--------------- Rutas-----------------//
router.get('/', controller.index)
router.get('/aboutUs', controller.aboutUs)
router.get('/contact', controller.contact)
router.get('/favorite', controller.favorite)
router.get('/login', controller.login)
router.get('/productCart', controller.productCart)
router.get('/productDetail', controller.productDetail)
router.get('/products', controller.products)
router.get('/register', controller.register)
router.get('/productCreate', controller.productCreate)

// exportacion de rutas
module.exports = router