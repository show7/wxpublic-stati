import * as React from 'react'
import * as ReactDOM from 'react-dom'
import $ from 'jquery'
import { Provider } from 'mobx-react'
import router from './router/router'
import store from './store/store'

import 'animate.css'
import 'normalize.css'
import './styles/common.less'

// 引入 animate-css，并给 jquery 扩展方法
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

// icon 使用阿里 iconfont

ReactDOM.render(
  <Provider {...store}>
    {router}
  </Provider>,
  document.querySelector('#root'),
)