const express = require('express');
const taskController = require('../controllers/taskController');
const { isAuthenticate } = require('../middlewares/auth');

const route = express.Router();

route.post('/new',isAuthenticate,taskController.newTask);
route.post('/my',isAuthenticate,taskController.getMyTask);

route.route('/:id').put(isAuthenticate,taskController.updateTask).delete(isAuthenticate,taskController.deleteTask);


module.exports = route;
