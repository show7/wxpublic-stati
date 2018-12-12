import * as React from 'react'
import { observer, inject } from 'mobx-react'
import {
  Form, Row, Col, Input, Button, Table,
} from 'antd'
import './UserInfoList.less'
import Api from '../../api/Api'
import userInfoListModel from './UserInfoListModel'

const FormItem = Form.Item

@inject('userInfoListModel')
@observer
class UserInfoForm extends React.Component {

  componentDidMount () {
  }

  async handleSearchResults () {
    const { userInfoListModel } = this.props
    const { getFieldsValue } = this.props.form
    let userInfoListRes = await Api.loadStudentsUserInfoList({})
    const { columnDefinition, columnData } = userInfoListRes.msg
    userInfoListModel.setColumnDefinition(columnDefinition)
    userInfoListModel.setColumnData(columnData)
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
          <Col span={6}>
            <FormItem label="学员姓名">
              {getFieldDecorator(`field-0`, {})(<Input placeholder="placeholder"/>)}
            </FormItem>
          </Col>
          <Col span={6}>
            <FormItem label="圈外Id（RiseId）">
              {getFieldDecorator(`field-1`, {})(<Input placeholder="placeholder"/>)}
            </FormItem>
          </Col>
          <Col span={6}>
            <FormItem>
              <Button type="primary"
                      htmlType="submit"
                      onClick={() => this.handleSearchResults()}>
                Search
              </Button>
              <Button style={{ marginLeft: 8 }}
                      onClick={() => this.handleResetInput()}>
                Clear
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

  state = {
    str: 'helloworld'
  }

  componentDidMount () {
  }

  render () {
    const { str } = this.state

    return (
      <div className="userinfo-list-container">
        <UserInfoFormWrapper/>
        <Table columns={columns}
               dataSource={data}
               bordered
               size="middle"
               scroll={{ x: '130%', y: 240 }}/>
      </div>
    )
  }

}