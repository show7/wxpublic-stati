import * as React from 'react'
import { Layout, Menu, Icon } from 'antd'
import { Route, Link } from 'react-router-dom'
import CustomizeHeader from '../CustomizeHeader/CustomizeHeader'
import MobxDemo from '../../router/MobxDemo/MobxDemo'
import UserInfoList from '../../router/UserInfoList/UserInfoList'

const { Header, Content, Footer, Sider } = Layout
const SubMenu = Menu.SubMenu

export default class BasicLayout extends React.Component {

  constructor () {
    super()
    this.state = {
      collapsed: true
    }
  }

  onCollapse () {
    this.setState({
      collapsed: !this.state.collapsed
    })
  }

  render () {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible={true}
               collapsed={this.state.collapsed}
               onCollapse={() => this.onCollapse()}>
          <Menu theme="dark"
                defaultSelectedKeys={['1']}
                mode="inline">
            <Menu.Item key="1">
              <Icon type="pie-chart"/>
              <span>Dashboard</span>
              <Link to="/"></Link>
            </Menu.Item>
            <SubMenu key="2"
                     title={<span><Icon type="user"/><span>学员信息</span></span>}>
              <Menu.Item key="3">
                <Link to="/list/userinfo-list">音频课学员</Link>
              </Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout>
          <CustomizeHeader/>
          <Content style={{ margin: '0 16px' }}>
            <div style={{ marginTop: '16px', padding: 24, background: '#fff', minHeight: 360 }}>
              <Route path="/demo"
                     component={MobxDemo}/>
              <Route path="/list/userinfo-list"
                     component={UserInfoList}/>
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>上海晓圈教育科技有限公司</Footer>
        </Layout>
      </Layout>
    )
  }

}