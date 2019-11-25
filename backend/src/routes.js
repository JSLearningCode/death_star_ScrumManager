const express = require('express');

const DashboardController = require('./controllers/DashboardController');

routes = express.Router();

//get do dashboard

routes.get('/dashboard', DashboardController.show);

// CRUD de usuarios, post de sprints, post de projetos

//routes.post('/userscreate', UsersController.create);

//routes.post('/sprintscreate', SprintsController.create);

//routes.post('/projectscreate', ProjectsController.create);

module.exports = routes;