import * as React from 'react'
import loadable from 'react-loadable'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'

import Loading from '../components/Loading/Loading'

const Home = loadable({
  loader: () => import('./Home/Home'),
  loading: Loading,
})

export default (
  <BrowserRouter>
    <Switch>
      <Route exact
             path={'/'}
             component={Home}/>
    </Switch>
  </BrowserRouter>
)