const express = require('express');
const routerAPI = express.Router();
const { getUsersApi, postCreateUserApi, putUpdateUserApi, deleteUserApi } = require('../controllers/apiController');

routerAPI.get('/users', getUsersApi);
routerAPI.post('/users', postCreateUserApi);
routerAPI.put('/users', putUpdateUserApi);
routerAPI.delete('/users', deleteUserApi);

module.exports = routerAPI;