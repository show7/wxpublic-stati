import * as React from 'react'
import { MemoryRouter, Switch, Route } from 'react-router-dom'
import DemoPage from './DemoPage/DemoPage'

export default (
  <MemoryRouter>
    <Switch>
      <Route exact
             path="/"
             component={DemoPage}/>
    </Switch>
  </MemoryRouter>
)