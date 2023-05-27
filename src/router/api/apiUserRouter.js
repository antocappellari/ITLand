const express = require('express');
const apiUser = require('../../controllers/api/apiUsers');

const router = express.Router();
router.get('/',apiUser.getAllUsers);
router.get('/user/:userId',apiUser.getUser);
router.post('/create',apiUser.createUser);
router.put('/update/:userId',apiUser.updateUser);
router.delete('/delete/:userId',apiUser.deleteUser);
router.get('/list',apiUser.userList);

module.exports = router