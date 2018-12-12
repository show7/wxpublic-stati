import * as axios from 'axios'
// 根据当前所在平台，添加 header
let platform = 'crm'
axios.defaults.headers.platform = platform
axios.defaults.headers.post['Content-Type'] = 'application/json'

// 对于 700 返回，默认跳转登录页
axios.interceptors.response.use(function (response) {
  if (response.status === 700) {
    if (isMobile()) {
      window.location.href = decodeURI(`${window.location.protocol}//${window.location.host}/wx/oauth/auth?callbackUrl=`) + encodeURIComponent(window.location.href)
    } else if (isPc()) {
      window.location.href = decodeURI(`${window.location.protocol}//${window.location.host}/login?callbackUrl=`) + encodeURIComponent(window.location.href)
    } else {
      window.location.href = decodeURI(`${window.location.protocol}//${window.location.host}/wx/oauth/auth?callbackUrl=`) + encodeURIComponent(window.location.href)
    }
  } else {
    return response
  }
}, function (error) {
  // proxyUtil.alertMessage(error)
})

/**
 * get 请求
 * @param url 请求资源地址
 * @param params 请求参数
 * @returns {Promise<never | T> | Promise.<T>}
 */
export function pget (url, params = {}) {
  try {
    // proxyUtil.startLoading()
    return axios.get(url, {
      params: params,
      validateStatus: function (status) {
        return status >= 200 && status < 300 || status == 700
      }
    }).then(response => {
      // proxyUtil.endLoading()
      let code = response.data.code
      let message = response.data.msg
      if (code > 220 || code < 200) {
        // proxyUtil.alertMessage(message.toString())
      }
      return response.data
    }).catch(error => {
      // proxyUtil.endLoading()
      // proxyUtil.alertMessage(error)
    })
  } catch (err) {
    console.error(err.type)
    console.error(err.message)
  }
}

/**
 * post 请求
 * @param url 请求资源地址
 * @param params 请求参数
 * @returns {Promise<never | T> | Promise.<T>}
 */
export function ppost (url, params = {}) {
  try {
    // proxyUtil.startLoading()
    return axios.post(url, params).then(response => {
      // proxyUtil.endLoading()
      let code = response.data.code
      let message = response.data.msg
      if (code > 220 || code < 200) {
        // proxyUtil.alertMessage(message.toString())
      }
      return response.data
    }).catch(error => {
      // proxyUtil.endLoading()
      // proxyUtil.alertMessage(error)
    })
  } catch (err) {
    console.error(err.type)
    console.error(err.message)
  }
}

/**
 * 静默 post 请求
 * @param url 请求资源地址
 * @param params 请求参数
 * @returns {Promise<never | T> | Promise.<T>}
 */
export function ppostMute (url, params = {}) {
  try {
    return axios.post(url, params).then(response => {
      let code = response.data.code
      let message = response.data.msg
      if (code > 220 || code < 200) {
        // proxyUtil.alertMessage(message.toString())
      }
      return response.data
    }).catch(error => {
      // proxyUtil.alertMessage(error)
    })
  } catch (err) {
    console.error(err.type)
    console.error(err.message)
  }
}

export function asyncAll (requests = []) {
  try {
    // proxyUtil.startLoading()
    return axios.all(requests).then(resultArr => {
      // proxyUtil.endLoading()
      for (let result of resultArr) {
        let code = result.code
        if (code > 220 || code < 200) {
          // proxyUtil.alertMessage(result.msg)
        }
      }
      return resultArr
    }).catch(error => {
      // proxyUtil.endLoading()
      // proxyUtil.alertMessage(error)
    })
  } catch (err) {
    console.error(err.type)
    console.error(err.message)
  }
}
