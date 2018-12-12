import * as React from 'react'
import { observer, inject } from 'mobx-react'
import {
  Form, Row, Col, Input, Button, Table, Divider, Modal
} from 'antd'
import userInfoListModel from './UserInfoListModel'
import Api from '../../api/Api'

import './UserInfoList.less'

const FormItem = Form.Item
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

@inject('userInfoListModel')
@observer
class UserInfoForm extends React.Component {

  ActionType = {
    ViewPurchaseDetail: Symbol('view_purchase_detail'),
    ViewCouponsDetail: Symbol('view_coupons_detail'),
    ViewAudioCourseDetail: Symbol('view_audio_course_detail')
  }

  async handleClickAction (actionType, text, record, index) {
    const { userInfoListModel } = this.props
    let matchColumnDataArr = userInfoListModel.columnData.filter((singleColumnData, index) => {
      return record.riseId === singleColumnData.riseId
    })
    let matchColumnData = matchColumnDataArr.length > 0 ? matchColumnDataArr[0] : {}

    switch (actionType) {
      case this.ActionType.ViewPurchaseDetail:
        userInfoListModel.modalVisible = true
        userInfoListModel.modalTitle = '付费详情'
        userInfoListModel.modalColumnDefinition = PurchaseColumnDefinition
        userInfoListModel.modalColumnData = matchColumnData.paidList
        break
      case this.ActionType.ViewCouponsDetail:
        userInfoListModel.modalVisible = true
        userInfoListModel.modalTitle = '可用优惠券'
        userInfoListModel.modalColumnDefinition = CouponsColumnDefinition
        userInfoListModel.modalColumnData = matchColumnData.couponList
        break
      case this.ActionType.ViewAudioCourseDetail:
        let audioCourseRes = await Api.loadAudioCourseList(record.riseId)
        userInfoListModel.modalVisible = true
        userInfoListModel.modalTitle = '音频课学习情况'
        userInfoListModel.modalColumnDefinition = AudioCourseColumnDefinition
        userInfoListModel.modalColumnData = audioCourseRes.msg.historyList
        break
      default:
        break
    }
  }

  async handleSearchResults () {
    const { userInfoListModel, form: { getFieldsValue, validateFields } } = this.props

    validateFields((errors, values) => {
      console.log('111111')
      console.log(errors)
      console.log(values)
    })

    let userInfoListRes = await Api.loadStudentsUserInfoList({})
    const { columnDefinition, columnData } = userInfoListRes.msg
    columnDefinition.push({
      title: '操作',
      key: 'operation',
      fixed: 'right',
      width: 300,
      render: (text, record, index) => (
        <span>
          <a href="javascript:"
             onClick={() => this.handleClickAction(this.ActionType.ViewPurchaseDetail, text, record, index)}>
            付费情况
          </a>
          <Divider type="vertical"/>
          <a href="javascript:"
             onClick={() => this.handleClickAction(this.ActionType.ViewCouponsDetail, text, record, index)}>
            优惠券
          </a>
          <Divider type="vertical"/>
          <a href="javascript:"
             onClick={() => this.handleClickAction(this.ActionType.ViewAudioCourseDetail, text, record, index)}>
            音频课
          </a>
        </span>
      )
    })
    userInfoListModel.columnDefinition = columnDefinition
    userInfoListModel.columnData = columnData
  }

  handleResetInput () {
    const { resetFields } = this.props.form
    resetFields()
  }

  render () {
    const { getFieldDecorator } = this.props.form
    return (
      <Form className="userinfo-form"
            layout="inline">
        <Row gutter={24}>
          <Col span={8}>
            <FormItem label="学员昵称">
              {getFieldDecorator(`field-0`, {
                rules: [{ required: this.state.checkNick, message: 'Please input your nickname' }]
              })(<Input placeholder="请输入"/>)}
            </FormItem>
          </Col>
          <Col span={8}>
            <FormItem label="圈外Id（RiseId）">
              {getFieldDecorator(`field-1`, {})(<Input placeholder="请输入"/>)}
            </FormItem>
          </Col>
          <Col span={8}>
            <FormItem>
              <Button type="primary"
                      htmlType="submit"
                      onClick={() => this.handleSearchResults()}>
                查询
              </Button>
              <Button style={{ marginLeft: 8 }}
                      onClick={() => this.handleResetInput()}>
                重置
              </Button>
            </FormItem>
          </Col>
        </Row>
      </Form>
    )
  }

}

const UserInfoFormWrapper = Form.create()(UserInfoForm)

@inject('userInfoListModel')
@observer
export default class UserInfoList extends React.Component {

  handleHideModal () {
    const { userInfoListModel } = this.props
    userInfoListModel.modalVisible = false
  }

  render () {
    const { userInfoListModel } = this.props

    return (
      <div className="userinfo-list-container">
        <UserInfoFormWrapper/>
        <Table className="userinfo-table"
               columns={userInfoListModel.columnDefinition}
               dataSource={userInfoListModel.columnData}/>

        <Modal width={720}
               title={userInfoListModel.modalTitle}
               visible={userInfoListModel.modalVisible}
               onOk={() => this.handleHideModal()}
               onCancel={() => this.handleHideModal()}
               footer={null}>
          <Table columns={userInfoListModel.modalColumnDefinition}
                 dataSource={userInfoListModel.modalColumnData}/>
        </Modal>
      </div>
    )
  }

}