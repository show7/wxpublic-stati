import * as React from 'react'
import { BrowserRouter, Route, Swicth } from 'react-router-dom'
import BasicLayout from '../layout/BasicLayout/BasicLayout'
import MobxDemo from './MobxDemo/MobxDemo'

const router = (
  <BrowserRouter>
    <div>
      <Route path="/wx_public_backend"
             component={BasicLayout}>
      </Route>
      <Route path="/hello"
             component={MobxDemo}></Route>
    </div>
  </BrowserRouter>
)

export default router