/**
 * 添加外部 css 文件
 * @param url
 */
const importExternalCss = (url) => {
  let cssLink = document.createElement('link')
  cssLink.href = url
  cssLink.rel = 'stylesheet'
  document.head.appendChild(cssLink)
}

/**
 * 添加外部 js 文件
 * @param url
 */
const importExternalJs = (url) => {
  let jsLink = document.createElement('script')
  jsLink.src = url
  document.body.appendChild(jsLink)
}

export {
  importExternalCss,
  importExternalJs
}