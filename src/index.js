import * as React from 'react';
import * as ReactDOM from 'react-dom';

// import css
import 'normalize.css';
// import './styles/base.less';

import { Provider } from 'react-redux';
import Routers from './routes/router';
import store from './store/createStore';

require('babel-polyfill');

ReactDOM.render(
  <Provider store={store}>
    <Routers store={store}/>
  </Provider>,
  document.querySelector('#root'),
);