const express = require('express');

const DashboardController = require('./controllers/DashboardController');
const UsersController = require('./controllers/UsersController');
const SprintsController = require('./controllers/SprintsController');
const ProjectsController = require('./controllers/ProjectsController');

routes = express.Router();

//get do dashboard

routes.get('/dashboard', DashboardController.show);

routes.get('/projectshow', ProjectsController.show);

routes.get('/sprintshow', SprintsController.show);

routes.get('/usershow', UsersController.show);

// CRUD de usuarios, post de sprints, post de projetos

routes.post('/userscreate', UsersController.store);

routes.post('/sprintscreate', SprintsController.store);

routes.post('/projectscreate', ProjectsController.store);

// routes.post('/projectupdate', ProjectsController.update);

// routes.post('/sprintupdate', SprintsController.update);

// routes.post('/userupdate', UsersController.update);

// routes.post('/projectdelete', ProjectsController.delete);

// routes.post('/sprintdelete', SprintsController.delete);

// routes.post('/userdelete', UsersController.delete);

module.exports = routes;