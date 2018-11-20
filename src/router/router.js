import * as React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import BasicLayout from '../layout/BasicLayout/BasicLayout'

const router = (
  <BrowserRouter>
    <div>
      <Route path="/"
             component={BasicLayout}>
      </Route>
    </div>
  </BrowserRouter>
)

export default router