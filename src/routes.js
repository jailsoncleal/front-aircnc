import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Login from './Views/Login/index';
import Dashboard from './Views/Dashboard/index';
import New from './Views/New/index';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Login}/>
                <Route path='/dashboard' component={Dashboard}/>
                <Route path='/new' component={New}/>
            </Switch>
        </BrowserRouter>
    )
}