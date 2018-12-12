/**
 * 此文件存放业务逻辑请求 api
 */
import { pget, ppost } from '../utils/request'

const business_api = {
  /**
   * 模糊查询用户信息
   */
  loadStudentsUserInfoList: (requestParam) => pget(`/api/crm/student/userinfo/list`, requestParam)
}

export default business_api
