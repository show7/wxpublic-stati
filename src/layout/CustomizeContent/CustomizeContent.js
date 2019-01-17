import * as React from 'react'
import { Layout } from 'antd'
import { Route, Switch } from 'react-router-dom'
import Outline from '../../router/Outline/Outline'
import Exception_404 from '../../router/Exception/404/Exception_404'
import Exception_500 from '../../router/Exception/500/Exception_500'

const { Content } = Layout

export default class CustomizeContent extends React.Component {

  constructor () {
    super()
    this.state = {}
  }

  render () {
    return (
      <Content>
        <div style={{ padding: 24, minHeight: 360 }}>
          <Switch>
            <Route path={`/wx_public_backend`}
                   exact={true}
                   component={Outline}/>
            <Route path={`/wx_public_backend/404`}
                   component={Exception_404}/>
            <Route path={`/wx_public_backend/500`}
                   component={Exception_500}/>
            <Route component={Exception_404}/>
          </Switch>
        </div>
      </Content>
    )
  }

}