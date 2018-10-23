/**
 * 挂载所有三方模块
 */
const mountModule = () => {
  window.mount = {}
  // 挂载 electron
  let electron = window.require('electron')
  window.mount.electron = electron
}

export default mountModule