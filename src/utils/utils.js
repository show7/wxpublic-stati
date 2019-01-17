const PlatForm = {
  MOBILE: 'mobile',
  PC: 'pc'
}

/**
 * 判断当前是否是手机模式宽度浏览
 * @returns {boolean}
 */
export function isMobileWidth () {
  return window.innerWidth < 576
}

/**
 * 判断当前浏览平台是否是微信点的链接
 * @returns {boolean}
 */
export function isMobilePlatForm () {
  if (window.ENV) {
    return window.ENV.platform == PlatForm.MOBILE
  } else {
    return true
  }
}