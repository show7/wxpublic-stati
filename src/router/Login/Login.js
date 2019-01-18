import * as React from 'react'
import { Modal } from 'antd'
import queryString from 'query-string'
import Api from '../../api/Api'
import { isDevelopment } from '../../utils/utils'

import './Login.less'

export default class Login extends React.Component {

  loginInterval = null

  state = {
    showQRCodeModal: false
  }

  async componentDidMount () {
    const { callbackUrl = `https://${window.location.host}/wx_public_backend/view` } = queryString.parse(this.props.location.search)
    console.log(callbackUrl)
    let oauthRes = await Api.base_loginOauth(callbackUrl, isDevelopment() ? 2 : 12)
    this.loginInterval = setInterval(() => {
      if (!window.WxLogin) {
        return
      } else {
        let params = Object.assign(oauthRes.msg, { id: 'login-qrcode' })
        console.log(params)
        window.obj = new WxLogin(params)
        clearInterval(this.loginInterval)
      }
    }, 500)
  }

  closeQRCodeModal () {
    this.setState({ showQRCodeModal: false })
  }

  render () {
    return (
      <div className="login-container">
        <div className="login-block">
          <div className="login-text">每个公众号必备的增长工具</div>
          <div className="login-btn"
               onClick={() => this.setState({ showQRCodeModal: true })}>登录
          </div>
        </div>
        <Modal className="login-qrcode-modal"
               visible={this.state.showQRCodeModal}
               footer={null}
               onCancel={() => this.setState({ showQRCodeModal: false })}>
          <div id="login-qrcode"></div>
        </Modal>
      </div>
    )
  }

}


