import * as React from 'react'
import { MemoryRouter, Switch, Route } from 'react-router-dom'

import Home from './Home/Home'
import About from './About/About'

export default (
  <MemoryRouter>
    <Switch>
      <Route exact
             path="/"
             component={Home}/>
      <Route exact
             path="/about"
             component={About}/>
    </Switch>
  </MemoryRouter>
)