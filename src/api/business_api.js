/**
 * 此文件存放业务逻辑请求 api
 */
import { pget, ppost } from '../utils/request'

const business_api = {
  // 获取公众号列表
  loadWeChatList: () => pget(`/api/kol/wechat/list`),
  // 获取关键数据和二维码链接
  loadKeyValuesAndQRCode: (weChatPublicId) => pget(`/api/kol/home/show?publicId=${weChatPublicId}`),
  // 分页获取文章数据
  loadArticleAnalysisList: (publicId, page = 1) => pget(`/api/kol/article/table?publicId=${publicId}&page=${page}`),
  // 获取时间线趋势图
  loadTimelineChartData: (publicId, time) => pget(`/api/kol/public/datas?publicId=${publicId}&time=${time}`),
  // 获取趋势图时间参数选项
  loadTimelineDuration: () => pget(`/api/kol/time/list`)
}

export default business_api
