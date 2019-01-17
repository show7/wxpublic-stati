import * as React from 'react'
import { Layout, Row, Col, Drawer } from 'antd'
import { Route } from 'react-router-dom'
import { observer, inject } from 'mobx-react'
import { isMobileWidth } from '../../utils/utils'
import CustomizeContent from '../CustomizeContent/CustomizeContent'
import CustomizeHeader from '../CustomizeHeader/CustomizeHeader'
import CustomizeSider from '../CustomizeSider/CustomizeSider'

import './BasicLayout.less'

const { Footer } = Layout

@inject('basicLayoutModel')
@observer
export default class BasicLayout extends React.Component {

  render () {
    const { basicLayoutModel } = this.props

    return (
      <Layout className="basic-layout-container">
        {
          isMobileWidth() ?
            <Drawer className="left-sider-drawer"
                    closable={false}
                    placement="left"
                    width={200}
                    onClose={() => basicLayoutModel.handleCloseLeftSider()}
                    visible={basicLayoutModel.showLeftSider}>
              <CustomizeSider/>
            </Drawer> :
            <CustomizeSider/>
        }
        <Layout>
          <CustomizeHeader onClickCollapseSiderIcon={() => this.onShowLeftSider()}/>
          <CustomizeContent/>
          <Footer style={{ textAlign: 'center' }}>上海晓圈教育科技有限公司</Footer>
        </Layout>
      </Layout>
    )
  }

}