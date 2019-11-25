import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Dashboard from './components/Dashboard/Dashboard';
import Sprint from './components/Sprints/Sprints';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import SideBar from './components/SideBar/Sidebar';

ReactDOM.render(
<>
    <SideBar />
    <BrowserRouter>
        <Switch>
            <Route path='/dashboard' component={ Dashboard }></Route>
            <Route path='/sprint' component={ Sprint }></Route>
        </Switch>
    </BrowserRouter>
</>,
document.getElementById('root'));

serviceWorker.unregister();
