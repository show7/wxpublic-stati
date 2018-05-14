import * as React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

import Home from './Home/Home';
import About from './About/About';
import RoleCreation from './RoleCreation/RoleCreation';
import DataList from './Backend/DataList/DataList';
import DataModal from './Backend/DataModal/DataModal';

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
      <Route exact
             path={'/backend'}
             component={DataList}/>
      <Route exact
             path={'/backend/modal'}
             component={DataModal}/>
    </Switch>
  </BrowserRouter>
);