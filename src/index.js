import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './store/createStore'
import Routes from './routes/router'
import $ from 'jquery'

/**
 * 全局三方功能样式
 */
import 'animate.css/animate.min.css'
import 'swiper/dist/css/swiper.min.css'
import 'antd/dist/antd.css'
/**
 * 优化 css
 */
import 'normalize.css/normalize.css'
import './styles/mixins.less'

/**
 * 全局 js 操作
 */
// require('babel-polyfill')
// 给 jquery 添加 animateCss 支持
$.fn.extend({
  animateCss: function (animationName, callback) {
    let animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend'
    this.addClass('animated ' + animationName).one(animationEnd, function () {
      $(this).removeClass('animated ' + animationName)
      if (callback) callback()
    })
    return this
  },
})

ReactDOM.render(
  <Provider store={store}>
    {Routes}
  </Provider>,
  document.querySelector('#root'),
)