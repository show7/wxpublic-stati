import * as React from 'react'
import propTypes from 'prop-types'

import './DialogBox.less'

export default class DialogBox extends React.Component {

  constructor () {
    super()
    this.state = {}
  }

  render () {
    const {
      dialogAvatar = 'https://thirdwx.qlogo.cn/mmopen/siaKjia9aBPcJHOCEV6z4Ayic3SEaztBgIHFjfNZCFnvibW7bURBmYJIwfoRgN2guicWOGEPX1S05NqJyTwA1EzoIJgWEdJg3nXlZ/132',
      dialogMessage = '默认对话消息'
    } = this.props

    // 文字最大长度设置为 50，不然字会溢出
    return (
      <div className="dialog-component">
        <img className="dialog-avatar"
             alt="人物头像"
             src={dialogAvatar}/>
        <span className="dialog-message">{dialogMessage}</span>
      </div>
    )
  }

}

DialogBox.propTypes = {
  dialogAvatar: propTypes.string,
  dialogMessage: propTypes.string,
}