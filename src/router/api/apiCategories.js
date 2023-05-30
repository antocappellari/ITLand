const express = require('express');
const router = express.Router();
const apiCategories = require('../../controllers/api/apiCategories')
router.get('/',apiCategories.getAllCategories)
router.get('/:categoryId',apiCategories.getCategory)

module.exports = router