const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController')

//--------------- Rutas-----------------//
router.get('/', mainController.index)

// exportacion de rutas
module.exports = router