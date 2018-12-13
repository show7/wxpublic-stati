import * as axios from 'axios'
// 根据当前所在平台，添加 header
let platform = 'crm'
axios.defaults.headers.platform = platform
axios.defaults.headers.post['Content-Type'] = 'application/json'

// 对于 700 返回，默认跳转登录页
axios.interceptors.response.use(function (response) {
  if (response.status === 700) {
    window.location.href = decodeURI(`${window.location.protocol}//${window.location.host}/login?callbackUrl=`) + encodeURIComponent(window.location.href)
  } else {
    return response
  }
}, function (error) {
  throw error
})

/**
 * get 请求
 * @param url 请求资源地址
 * @param params 请求参数
 * @returns {Promise<never | T> | Promise.<T>}
 */
export function pget (url, params = {}) {
  try {
    return axios.get(url, {
      params: params,
      validateStatus: function (status) {
        return status >= 200 && status < 300 || status == 700
      }
    }).then(response => {
      return response.data
    }).catch(error => {
      throw error
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
    return axios.post(url, params).then(response => {
      return response.data
    }).catch(error => {
      throw error
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
      return response.data
    }).catch(error => {
      throw error
    })
  } catch (err) {
    console.error(err.type)
    console.error(err.message)
  }
}

export function asyncAll (requests = []) {
  try {
    return axios.all(requests).then(resultArr => {
      return resultArr
    }).catch(error => {
      throw error
    })
  } catch (err) {
    console.error(err.type)
    console.error(err.message)
  }
}
