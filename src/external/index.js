/**
 * 引入各类三方文件
 */
import { importExternalCss, importExternalJs } from '../utils/domUtil'

import $ from 'jquery'
import 'normalize.css'
import 'animate.css'
import 'ant-design-pro/dist/ant-design-pro.min.css'
import '../styles/common.less'

// 阿里 iconfon 引入
importExternalJs('https://at.alicdn.com/t/font_677914_slzhroh3um.js')

importExternalJs('https://res.wx.qq.com/connect/zh_CN/htmledition/js/wxLogin.js')

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