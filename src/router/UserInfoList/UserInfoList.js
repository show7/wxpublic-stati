import * as React from 'react'
import { observer, inject } from 'mobx-react'
import {
  Form, Row, Col, Input, Button, Table, Modal
} from 'antd'
import userInfoListModel from './UserInfoListModel'

import './UserInfoList.less'

const FormItem = Form.Item

@inject('userInfoListModel')
@observer
class UserInfoForm extends React.Component {

  render () {
    const { userInfoListModel, form: { getFieldDecorator, getFieldsValue } } = this.props
    return (
      <Form className="userinfo-form"
            layout="inline">
        <Row gutter={24}>
          <Col span={8}>
            <FormItem label="学员昵称">
              {getFieldDecorator(`nickName`, {})(<Input placeholder="请输入"/>)}
            </FormItem>
          </Col>
          <Col span={8}>
            <FormItem label="圈外Id（RiseId）">
              {getFieldDecorator(`riseId`, {})(<Input placeholder="请输入"/>)}
            </FormItem>
          </Col>
          <Col span={8}>
            <FormItem>
              <Button type="primary"
                      htmlType="submit"
                      onClick={() => userInfoListModel.handleSearchResults(getFieldsValue())}>
                查询
              </Button>
              <Button style={{ marginLeft: 8 }}
                      onClick={() => this.props.form.resetFields()}>
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
               onOk={() => userInfoListModel.hideModal()}
               onCancel={() => userInfoListModel.hideModal()}
               footer={null}>
          <Table columns={userInfoListModel.modalColumnDefinition}
                 dataSource={userInfoListModel.modalColumnData}/>
        </Modal>
      </div>
    )
  }

}