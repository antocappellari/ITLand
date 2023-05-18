const express = require('express');
const imagesController = require('../controllers/imageController');
const router = express.Router();
const upload = require('../middlewares/imagesMulter');
const isAdmin = require('../middlewares/isAdmin.js');

router.post('/create/:productId',isAdmin,upload.any("file"),imagesController.createFiles);
router.put('/update/:id/:productId',isAdmin,upload.single("file"),imagesController.update);
router.delete('/delete/:id/:productId',isAdmin,imagesController.delete);

module.exports = router