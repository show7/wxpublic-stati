import * as React from 'react'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'

import loadable from 'react-loadable'
import Loading from '../components/Loading/Loading'

import About from './About/About'
import RoleCreation from './RoleCreation/RoleCreation'
import DataList from './Backend/DataList/DataList'
import DataModal from './Backend/DataModal/DataModal'
import RoadMap from './RoadMap/RoadMap'

const HomePage = loadable({
  loader: () => import('./Home/Home'),
  loading: Loading,
})

export default (
  <BrowserRouter>
    <Switch>
      <Route exact
             path={'/'}
             component={HomePage}/>
      <Route exact
             path={'/about'}
             component={About}/>
      <Route exact
             path={'/roadmap'}
             component={RoadMap}/>
      <Route exact
             path={'/role/creation'}
             component={RoleCreation}/>
      <Route exact
             path={'/backend'}
             component={DataList}/>
      <Route exact
             path={'/backend/modal'}
             component={DataModal}/>
    </Switch>
  </BrowserRouter>
)