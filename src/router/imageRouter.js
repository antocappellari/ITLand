const express = require('express');
const imagesController = require('../controllers/imageController');
const router = express.Router();
const upload = require('../middlewares/imagesMulter');

router.post('/create/:productId',upload.any("file"),imagesController.createFiles);
router.put('/update/:id/:productId',upload.single("file"),imagesController.update);
router.delete('/delete/:id/:productId',imagesController.delete);

module.exports = router