import * as React from 'react'

export default class Login extends React.Component {

  componentDidMount () {
    var obj = new WxLogin({
      self_redirect: true,
      id: 'login_container',
      appid: 'wx2a0118d72abd47e8',
      scope: 'snsapi_login',
      redirect_uri: `${window.location.protocol}//${window.location.host}/wx_public_backend`,
      state: 'helloworld',
      style: '',
      href: ''
    })
  }

  render () {
    return (
      <div className="login-container">
        <div id="login-qrcode"></div>
      </div>
    )
  }

}