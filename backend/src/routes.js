const express = require('express');

const DashboardController = require('./controllers/DashboardController');
const UsersController = require('./controllers/UsersController');
const SprintsController = require('./controllers/SprintsController');
const ProjectsController = require('./controllers/ProjectsController');

routes = express.Router();

// CRUD do backend por rotas

//READ

routes.get('/dashboard', DashboardController.show);

routes.get('/projectshow', ProjectsController.show);

routes.get('/sprintshow', SprintsController.show);

routes.get('/usershow', UsersController.show);

// CREATE

routes.post('/userscreate', UsersController.store);

routes.post('/sprintscreate', SprintsController.store);

routes.post('/projectscreate', ProjectsController.store);

// UPDATE

routes.post('/projectupdate', ProjectsController.update);

routes.post('/sprintupdate', SprintsController.update);

routes.post('/userupdate', UsersController.update);

// DELETE

routes.post('/projectdelete', ProjectsController.delete);

routes.post('/sprintdelete', SprintsController.delete);

routes.post('/userdelete', UsersController.deleted);

module.exports = routes;