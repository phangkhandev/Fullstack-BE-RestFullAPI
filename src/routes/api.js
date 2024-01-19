const express = require('express');
const routerAPI = express.Router();
const { getUsersApi, postCreateUserApi, putUpdateUserApi, deleteUserApi, postUploadSingleFileApi,
    postUploadMultipleFileApi
} = require('../controllers/apiController');

routerAPI.get('/users', getUsersApi);
routerAPI.post('/users', postCreateUserApi);
routerAPI.put('/users', putUpdateUserApi);
routerAPI.delete('/users', deleteUserApi);

routerAPI.post('/file', postUploadSingleFileApi);
routerAPI.post('/files', postUploadMultipleFileApi);

module.exports = routerAPI;