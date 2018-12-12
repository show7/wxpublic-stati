import * as React from 'react'
import { observer, inject } from 'mobx-react'
import {
  Form, Row, Col, Input, Button, Icon,
} from 'antd'
import './UserInfoList.less'

const FormItem = Form.Item

@inject('userInfoListModel')
@observer
class UserInfoForm extends React.Component {

  componentDidMount () {
    console.log(this.props)
  }

  handleSearchResults () {
    const { userInfoListModel } = this.props
    const { getFieldsValue } = this.props.form

    userInfoListModel.setResults([5])
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
    console.log('list:', this.props)
  }

  render () {
    const { str } = this.state

    return (
      <div className="userinfo-list-container">
        <UserInfoFormWrapper/>
        <h1>{this.props.userInfoListModel.results[0]}</h1>
      </div>
    )
  }

}