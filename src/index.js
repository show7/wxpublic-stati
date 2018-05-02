import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/createStore';
import Routes from './routes/router';
import $ from 'jquery';

/**
 * import 全局 css
 */
import 'normalize.css';
import 'animate.css';
import './styles/base.less';
import './styles/global.less';

/**
 * 全局 js 操作
 */
require('babel-polyfill');
// 添加 animateCss 支持
$.fn.extend({
  animateCss: function (animationName, callback) {
    let animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
    this.addClass('animated ' + animationName).one(animationEnd, function () {
      console.log(this)
      $(this).removeClass('animated ' + animationName);
      if (callback) callback();
    });
    return this;
  },
});

ReactDOM.render(
  <Provider store={store}>
    {Routes}
  </Provider>,
  document.querySelector('#root'),
);