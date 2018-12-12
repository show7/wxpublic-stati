import * as React from 'react'
import { Layout, Menu, Icon, Breadcrumb } from 'antd'
import { Route } from 'react-router-dom'
import MobxDemo from '../../router/MobxDemo/MobxDemo'
import SideMenu from '../SideMenu/SideMenu'
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

  componentDidMount () {
    console.log(this.props)
  }

  render () {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible
               collapsed={this.state.collapsed}
               onCollapse={() => this.onCollapse()}>
          <SideMenu/>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}></Header>
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