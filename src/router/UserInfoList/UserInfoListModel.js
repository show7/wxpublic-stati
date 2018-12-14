import * as React from 'react'
import { observable, action } from 'mobx'
import { Divider, message } from 'antd'
import Api from '../../api/Api'

// 付费购买情况弹框表格定义
const PurchaseColumnDefinition = [
  {
    title: '项目名称',
    dataIndex: 'project'
  },
  {
    title: '购买时间',
    dataIndex: 'paidTime'
  },
  {
    title: '购买金额',
    dataIndex: 'paidPrice'
  },
  {
    title: '推荐人',
    dataIndex: 'promoter'
  },
]
// 可用优惠券表格定义
const CouponsColumnDefinition = [
  {
    title: '类别',
    dataIndex: 'description'
  },
  {
    title: '金额',
    dataIndex: 'amount'
  },
]
// 音频课数据表格定义
const AudioCourseColumnDefinition = [
  {
    title: '周期',
    dataIndex: 'period'
  },
  {
    title: '班主任',
    dataIndex: 'teacher'
  },
  {
    title: '学习日期',
    dataIndex: 'day'
  },
  {
    title: '学习时间',
    dataIndex: 'time'
  },
  {
    title: '打卡时间',
    dataIndex: 'markTime'
  },
]
// 操作类型
const ActionType = {
  ViewPurchaseDetail: Symbol('view_purchase_detail'),
  ViewCouponsDetail: Symbol('view_coupons_detail'),
  ViewAudioCourseDetail: Symbol('view_audio_course_detail')
}

class UserInfoListModel {

  @observable
  columnData = []
  @observable
  columnDefinition = []

  @observable
  modalVisible = false
  @observable
  modalTitle = ''
  @observable
  modalColumnDefinition = []
  @observable
  modalColumnData = []

  @action.bound
  async handleSearchResults (values) {
    const { riseId, nickName } = values
    if (!riseId && !nickName) {
      message.error('至少填写一个搜索条件', 1)
      return
    }

    let userInfoListRes = await Api.loadStudentsUserInfoList(values)
    const { columnDefinition, columnData } = userInfoListRes.msg
    columnDefinition.push({
      title: '操作',
      key: 'operation',
      fixed: 'right',
      width: 300,
      render: (text, record, index) => (
        <span>
          <a href="javascript:"
             onClick={() => this.handleClickAction(ActionType.ViewPurchaseDetail, text, record, index)}>
            付费情况
          </a>
          <Divider type="vertical"/>
          <a href="javascript:"
             onClick={() => this.handleClickAction(ActionType.ViewCouponsDetail, text, record, index)}>
            优惠券
          </a>
          <Divider type="vertical"/>
          <a href="javascript:"
             onClick={() => this.handleClickAction(ActionType.ViewAudioCourseDetail, text, record, index)}>
            音频课
          </a>
        </span>
      )
    })
    this.columnDefinition = columnDefinition
    this.columnData = columnData
  }

  async handleClickAction (actionType, text, record, index) {
    let matchColumnDataArr = this.columnData.filter((singleColumnData, index) => {
      return record.riseId === singleColumnData.riseId
    })
    let matchColumnData = matchColumnDataArr.length > 0 ? matchColumnDataArr[0] : {}

    switch (actionType) {
      case ActionType.ViewPurchaseDetail:
        this.modalVisible = true
        this.modalTitle = '付费详情'
        this.modalColumnDefinition = PurchaseColumnDefinition
        this.modalColumnData = matchColumnData.paidList
        break
      case ActionType.ViewCouponsDetail:
        this.modalVisible = true
        this.modalTitle = '可用优惠券'
        this.modalColumnDefinition = CouponsColumnDefinition
        this.modalColumnData = matchColumnData.couponList
        break
      case ActionType.ViewAudioCourseDetail:
        let audioCourseRes = await Api.loadAudioCourseList(record.riseId)
        this.modalVisible = true
        this.modalTitle = '音频课学习情况'
        this.modalColumnDefinition = AudioCourseColumnDefinition
        this.modalColumnData = audioCourseRes.msg.historyList
        break
      default:
        break
    }
  }

  @action.bound
  hideModal () {
    this.modalVisible = false
  }

}

const userInfoListModel = new UserInfoListModel()
export default userInfoListModel