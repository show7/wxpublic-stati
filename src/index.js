import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './store/createStore'
import Routes from './routes/router'
import mountModule from './external/mountModule/mountModule'

// TODO icon 使用阿里的 iconfont

// 挂载三方 node 模块
mountModule()

ReactDOM.render(
  <Provider store={store}>
    {Routes}
  </Provider>,
  document.querySelector('#root'),
)