import './external'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'mobx-react'
import router from './router/router'
import store from './store/store'

import './styles/common.less'

ReactDOM.render(
  <Provider {...store}>
    {router}
  </Provider>,
  document.querySelector('#root'),
)