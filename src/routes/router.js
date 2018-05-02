import * as React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

import Home from './Home/Home';
import About from './About/About';
import RoleCreation from './RoleCreation/RoleCreation';

export default (
  <BrowserRouter>
    <Switch>
      <Route exact
             path={'/'}
             component={Home}/>
      <Route path={'/about'}
             component={About}/>
      <Route path={'/role/creation'}
             component={RoleCreation}/>
    </Switch>
  </BrowserRouter>
);