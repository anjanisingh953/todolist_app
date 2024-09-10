const userController = require('../controllers/userController');
const express = require('express');
const { isAuthenticate } = require('../middlewares/auth');
const route = express.Router();


route.post('/new',userController.register);
route.post('/login',userController.login);

route.get('/me',isAuthenticate,userController.getMyProfile);
route.get('/logout',isAuthenticate,userController.logout);
module.exports = route  