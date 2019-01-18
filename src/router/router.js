import * as React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import BasicLayout from '../layout/BasicLayout/BasicLayout'
import Exception_500 from './Exception/500/Exception_500'
import Exception_404 from './Exception/404/Exception_404'
import Login from './Login/Login'

const router = (
  <BrowserRouter>
    <div>
      <Switch>
        <Route path="/wx_public_backend/view"
               component={BasicLayout}/>
        <Route path={`/wx_public_backend/login`}
               component={Login}/>
        <Route path={`/wx_public_backend/404`}
               component={Exception_404}/>
        <Route path={`/wx_public_backend/500`}
               component={Exception_500}/>
        <Route component={Exception_404}/>
      </Switch>
    </div>
  </BrowserRouter>
)

export default router