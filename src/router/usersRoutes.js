const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');
const validator = require('../middlewares/validatorMiddleware');
const upload = require('../middlewares/userMulter');
const authMiddleware = require('../middlewares/authMiddleware');
const guestMiddleware = require('../middlewares/guestMiddleware');


//--------------- Rutas-----------------//
router.get('/contactUs', usersController.contactUs)
router.get('/aboutUs', usersController.aboutUs)
router.get('/login',guestMiddleware ,usersController.login)
router.post('/login',usersController.loginProcess)
router.get('/register',guestMiddleware ,usersController.register)
router.post('/register',upload.single('image'),validator,usersController.registerProcess)
router.get('/profile', authMiddleware,usersController.profile)
router.get('/logout',usersController.logout)



// exportacion de rutas
module.exports = router