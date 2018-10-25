import * as React from 'react'
import * as ReactDOM from 'react-dom'
import $ from 'jquery'
import { Provider } from 'react-redux'
import store from './store/createStore'
import Routes from './module/router'
import mountModule from './external/mountModule/mountModule'

import 'normalize.css'
import './styles/common.less'
// 引入 animate-css，并给 jquery 扩展方法
import 'animate.css'

$.fn.extend({
  animateCss: function (animationName, callback) {
    var animationEnd = (function (el) {
      var animations = {
        animation: 'animationend',
        OAnimation: 'oAnimationEnd',
        MozAnimation: 'mozAnimationEnd',
        WebkitAnimation: 'webkitAnimationEnd',
      }

      for (var t in animations) {
        if (el.style[t] !== undefined) {
          return animations[t]
        }
      }
    })(document.createElement('div'))

    this.addClass('animated ' + animationName).one(animationEnd, function () {
      $(this).removeClass('animated ' + animationName)

      if (typeof callback === 'function') callback()
    })

    return this
  },
})

// TODO icon 使用阿里的 iconfont

// 挂载三方 node 模块
mountModule()

ReactDOM.render(
  <Provider store={store}>
    {Routes}
  </Provider>,
  document.querySelector('#root'),
)