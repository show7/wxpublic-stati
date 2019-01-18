import * as React from 'react'
import { Layout, Menu, Icon } from 'antd'
import { Link } from 'react-router-dom'
import { observer, inject } from 'mobx-react'
import { isMobileWidth } from '../../utils/utils'

const SubMenu = Menu.SubMenu
const { Header, Content, Footer, Sider } = Layout

@inject('basicLayoutModel')
@observer
class SiderWrapper extends React.Component {

  render () {
    const { basicLayoutModel } = this.props

    if (isMobileWidth()) {
      return (
        <Sider className="sider-menu-component"
               collapsible={false}
               collapsed={false}>
          {this.props.children}
        </Sider>
      )
    } else {
      return (
        <Sider className="sider-menu-component"
               defaultCollapsed={true}
               collapsible={true}
               collapsed={!basicLayoutModel.showLeftSider}
               onCollapse={() => basicLayoutModel.handleToggleLeftSiderStatus()}>
          {this.props.children}
        </Sider>
      )
    }
  }

}

export default class CustomizeSider extends React.Component {

  render () {
    return (
      <SiderWrapper>
        <Menu theme="dark"
              defaultSelectedKeys={['1']}
              mode="inline">
          <Menu.Item key="1">
            <Icon type="pie-chart"/>
            <span>数据概览</span>
            <Link to={`/wx_public_backend/view`}></Link>
          </Menu.Item>
          {/*<SubMenu key="2"*/}
          {/*title={<span><Icon type="user"/><span>学员信息</span></span>}>*/}
          {/*<Menu.Item key="3">*/}
          {/*<Link to={`/demo`}>音频课学员</Link>*/}
          {/*</Menu.Item>*/}
          {/*</SubMenu>*/}
        </Menu>
      </SiderWrapper>
    )
  }

}
