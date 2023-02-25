const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController')

//--------------- Rutas-----------------//
router.get('/contactUs', usersController.contactUs)
router.get('/aboutUs', usersController.aboutUs)
router.get('/login', usersController.login)
router.get('/register', usersController.register)
router.post('/register',usersController.registerProcess)


// exportacion de rutas
module.exports = router