import * as React from 'react'
import { observable, action } from 'mobx'
import { message as antdMessage } from 'antd'
import Api from '../../api/Api'

class OutlineModel {

  @observable weChatList = [] // 所能切换的微信公众号列表
  @observable currentWeChat = null // 当前选择查看的微信公众号

  @observable totalOpenRate = '-'  // 累计文章打开率
  @observable totalSubscribe = '-'  // 累计订阅人数

  @observable newOpenRate = '-' // 昨日文章打开率
  @observable newPushNum = '-' // 昨日文章推送人数
  @observable newReadNum = '-'  // 昨日文章阅读次数
  @observable newSubscribe = '-'  // 昨日新增订阅人数

  @observable qrCode = ''
  @observable isShowQRCode = false

  @observable timelineDuration = []
  @observable currentTimelineDuration = null

  @observable timelineChartsData = []

  @observable articleColumns = [
    {
      title: '文章标题',
      dataIndex: 'articleName',
      key: 'articleName',
    },
    {
      title: '时间',
      dataIndex: 'time',
      key: 'time',
    },
    {
      title: '推送人数',
      dataIndex: 'pushNum',
      key: 'pushNum',
    },
    {
      title: '阅读人数',
      dataIndex: 'openNum',
      key: 'openNum',
    },
    {
      title: '打开率',
      dataIndex: 'openRate',
      key: 'openRate',
    },
  ]
  @observable articleData = []
  @observable articlePagination = null

  @observable isShowLoading = true

  @action.bound
  async loadOutlineInitData () {
    let weChatListRes = await Api.loadWeChatList()
    this.weChatList = weChatListRes.msg
    this.currentWeChat = this.weChatList.length > 0 ? this.weChatList[0] : null

    if (this.weChatList.length == 0) {
      antdMessage.warn('暂未查到您相关的公众号信息')
      this.isShowLoading = false
      return
    }

    this._loadKeyValuesAndQRCode(this.currentWeChat.id)
    let timelineDurationRes = await Api.loadTimelineDuration()
    this.timelineDuration = timelineDurationRes.msg
    this.currentTimelineDuration = this.timelineDuration[0] ? this.timelineDuration[0].id : null
    this._loadTimelineChartData(this.currentWeChat.id, this.currentTimelineDuration)
    this._loadArticleAnalysisList(this.currentWeChat.id, 1)
    this.isShowLoading = false
  }

  @action.bound
  changeWeChat = (weChatId) => {
    this.currentWeChat = this.weChatList.filter((weChatItem) => weChatItem.id == weChatId)[0]
    this._loadKeyValuesAndQRCode(this.currentWeChat.id)
    this._loadTimelineChartData(this.currentWeChat.id, this.currentTimelineDuration)
    this._loadArticleAnalysisList(this.currentWeChat.id, 1)
  }

  @action.bound
  showCurrentQRCodeUrl () {
    this.isShowQRCode = true
  }

  @action.bound
  hideCurrentQRCodeUrl () {
    this.isShowQRCode = false
  }

  @action.bound
  async changeTimeDuration (timeDuration) {
    this.currentTimelineDuration = timeDuration
    this._loadTimelineChartData(this.currentWeChat.id, this.currentTimelineDuration)
  }

  @action.bound
  async changePagination (clickPage) {
    this._loadArticleAnalysisList(this.currentWeChat.id, clickPage)
  }

  async _loadKeyValuesAndQRCode (weChatId) {
    let keyValuesAndQRCodeRes = await Api.loadKeyValuesAndQRCode(weChatId)
    this.totalOpenRate = keyValuesAndQRCodeRes.msg.totalOpenRate
    this.totalSubscribe = keyValuesAndQRCodeRes.msg.totalSubscribe
    this.newOpenRate = keyValuesAndQRCodeRes.msg.newOpenRate
    this.newPushNum = keyValuesAndQRCodeRes.msg.newPushNum
    this.newReadNum = keyValuesAndQRCodeRes.msg.newReadNum
    this.newSubscribe = keyValuesAndQRCodeRes.msg.newSubscribe
    this.qrCode = keyValuesAndQRCodeRes.msg.qrCode
  }

  async _loadTimelineChartData (weChatId, timeDuration) {
    let timelineChartsDataRes = await Api.loadTimelineChartData(weChatId, timeDuration)
    this.timelineChartsData = timelineChartsDataRes.msg
  }

  /**
   * 获取文章列表和分页相关数据
   * @param weChatId
   * @param page
   * @returns {Promise<void>}
   * @private
   */
  async _loadArticleAnalysisList (weChatId, page) {
    let articleAnalyisisListRes = await Api.loadArticleAnalysisList(weChatId, page)
    this.articleData = articleAnalyisisListRes.msg.content
    this.articlePagination = articleAnalyisisListRes.msg.page
  }
}

const outlineModel = new OutlineModel()
export default outlineModel