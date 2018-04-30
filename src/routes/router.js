import * as React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

import Home from './Home/Home';

export default () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact
               path={'/'}
               component={Home}/>
      </Switch>
    </BrowserRouter>
  );
}