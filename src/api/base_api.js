import { pget, ppost } from '../utils/request'

/**
 * 此文件用来存放基础 api 请求
 */
const base_api = {
  /**
   * 获取人员基本信息
   */
  base_loadUserInfo: (riseId) => {
    if (riseId) {
      return pget(`/api/kol/user/info?riseId=${riseId}`)
    } else {
      return pget(`/api/kol/user/info`)
    }
  },
  /**
   * 获取微信登录数据
   * @param callbackUrl 跳转 url
   * @param serviceId 所登录的公众号 id
   */
  base_loginOauth: (callbackUrl, serviceId) => pget(`/wx/oauth/pc/auth?callbackUrl=${encodeURIComponent(callbackUrl)}&serviceId=${serviceId}`)
}

export default base_api