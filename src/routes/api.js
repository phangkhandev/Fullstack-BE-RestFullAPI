const express = require('express');
const routerAPI = express.Router();
const { getUsersApi } = require('../controllers/apiController');

routerAPI.get('/users', getUsersApi);


module.exports = routerAPI;