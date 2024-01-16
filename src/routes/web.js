const express = require('express');
const { getHomepage, getABC, postCreateUser, postDeleteUser, getCreatePage, deleteUserById, getUpdatePage, postUpdateUser } = require('../controllers/homeController');
const router = express.Router();

router.get('/', getHomepage);
router.get('/check', getABC);
router.get('/create', getCreatePage);
router.post('/create-user', postCreateUser);
router.post('/update/:id', getUpdatePage);
router.post('/update-user', postUpdateUser);
router.post('/delete/:id', deleteUserById);
router.post('/delete-user/:id', postDeleteUser);

module.exports = router;