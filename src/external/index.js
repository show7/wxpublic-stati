import $ from 'jquery'
import 'animate.css'
import 'normalize.css'
import 'antd/dist/antd.css';
import { importExternalCss, importExternalJs } from '../utils/domUtil'

// 阿里 iconfon 引入
importExternalJs('https://at.alicdn.com/t/font_677914_slzhroh3um.js')

// 引入 animate-css，并给 jquery 扩展方法
$.fn.extend({
  animateCss: function (animationName, callback) {
    let animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend'
    this.addClass(`animated ${animationName}`).one(animationEnd, function () {
      $(this).removeClass(`animated ${  animationName}`)
      if (callback) callback()
    })
    return this
  }
})