import * as React from 'react'
import * as ReactDOM from 'react-dom'

import { Provider } from 'react-redux'

import Routers from './routes/router'
import store from './store/store'

require('babel-polyfill')

ReactDOM.render(
  <Provider store={store}>
    <Routers/>
  </Provider>,
  document.querySelector('#root'),
)