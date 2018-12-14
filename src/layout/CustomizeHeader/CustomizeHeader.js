import * as React from 'react'
import { Layout, Avatar } from 'antd'
import Api from '../../api/Api'

import './CustomizeHeader.less'

const { Header } = Layout

export default class CustomizeHeader extends React.Component {

  state = {
    riseId: '',
    avatar: '',
    nickName: ''
  }

  async componentDidMount () {
    let loginUserInfoRes = await Api.base_loadUserInfo()
    const { riseId, avatar, nickName } = loginUserInfoRes.msg
    this.setState({
      riseId: riseId,
      avatar: avatar,
      nickName: nickName
    })
  }

  render () {
    const { avatar, nickName } = this.state

    return (
      <Header className="customize-header-component"
              style={{ background: '#fff', padding: 0 }}>
        <div className="loginuser-block">
          <Avatar size={40}
                  src={avatar}/>
          <span className="nickname">{nickName}</span>
        </div>
      </Header>
    )
  }

}