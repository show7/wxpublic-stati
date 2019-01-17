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
  }
}

export default base_api