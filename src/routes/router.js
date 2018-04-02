import * as React from 'react'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'

import Home from './Home/Home'
import About from './Home/components/About/About'

export default () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={'/'} component={Home}/>
        <Route path={'/about'} component={About}/>
      </Switch>
    </BrowserRouter>
  )
}