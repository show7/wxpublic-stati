import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './store/createStore'
import Routes from './routes/router'

// TODO icon 使用阿里的 iconfont

ReactDOM.render(
  <Provider store={store}>
    {Routes}
  </Provider>,
  document.querySelector('#root'),
)