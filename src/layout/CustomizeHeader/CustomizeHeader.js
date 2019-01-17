import * as React from 'react'
import { Layout, Avatar, Icon, Dropdown, Menu } from 'antd'
import { observer, inject } from 'mobx-react'

import './CustomizeHeader.less'
import { isMobileWidth } from '../../utils/utils'

const { Header } = Layout

@inject('basicLayoutModel')
@observer
export default class CustomizeHeader extends React.Component {

  componentDidMount () {
    const { basicLayoutModel } = this.props
    basicLayoutModel.loadUserInfo()
  }

  render () {
    const { basicLayoutModel } = this.props

    const menu = (
      <Menu>
        <Menu.Item key="1"
                   onClick={() => basicLayoutModel.logout()}>
          <Icon className="popover-icon"
                type="close-circle"
                theme="outlined"/>
          <span className="popover-text">退出登录</span>
        </Menu.Item>
      </Menu>
    )

    return (
      <Header className="customize-header-component">
        <Icon className="collapse-icon"
              type="bars"
              theme="outlined"
              onClick={() => basicLayoutModel.handleToggleLeftSiderStatus()}/>
        <div className="loginuser-block">
          {/* 只有 pc 模式浏览才有退出登录 */}
          {
            isMobileWidth() ?
              <Avatar size={40}
                      src={basicLayoutModel.userInfo.avatar}/> :
              <Dropdown overlay={menu}>
                <Avatar size={40}
                        src={basicLayoutModel.userInfo.avatar}/>
              </Dropdown>
          }
          <span className="nickname">{basicLayoutModel.userInfo.nickName}</span>
        </div>
      </Header>
    )
  }

}