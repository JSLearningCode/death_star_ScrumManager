import React from 'react';
import ReactDOM from 'react-dom';
import { Container } from './styles';
import 'bootstrap/dist/css/bootstrap.min.css';

import Dashboard from './pages/Dashboard/index';
import IssueDescription from './pages/IssueDescription/index';
import Issues from './pages/Issues/index';
import Kanban from './pages/Kanban/index';
import ProductBacklog from './pages/ProductBacklog/index';
import Projects from './pages/Projects/index';
import SprintList from './pages/SprintList/index';


import { BrowserRouter, Switch, Route } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import SideBar from './components/SideBar/index';

ReactDOM.render(
<Container>
    <SideBar />
    <BrowserRouter>
        <Switch>
            <Route path='/dashboard' component={ Dashboard }></Route>
            <Route path='/issuedescription' component={ IssueDescription }></Route>
            <Route path='/issues' component={ Issues }></Route>
            <Route path='/kanban' component={ Kanban }></Route>
            <Route path='/productbacklog' component={ ProductBacklog }></Route>
            <Route path='/projects' component={ Projects }></Route>
            <Route path='/sprint' component={ SprintList }></Route>
        </Switch>
    </BrowserRouter>
</Container>,
document.getElementById('root'));

serviceWorker.unregister();
