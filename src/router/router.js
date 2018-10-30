import * as React from 'react'
import { MemoryRouter, Switch, Route } from 'react-router-dom'
import WorldMap from './WorldMap/WorldMap'

const router = (
  <MemoryRouter>
    <Switch>
      <Route exact
             path="/"
             component={WorldMap}/>
    </Switch>
  </MemoryRouter>
)

export default router