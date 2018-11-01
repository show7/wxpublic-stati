import * as React from 'react'
import propTypes from 'prop-types'

import './SimpleDialog.less'

export default class SimpleDialog extends React.Component {

  constructor () {
    super()
    this.state = {}
  }

  render () {
    const {
      avatar,
      message
    } = this.props

    // 文字最大长度设置为 50，不然字会溢出
    return (
      <div className="dialog-component">
        <img className="dialog-avatar"
             alt="人物头像"
             src={avatar}/>
        <span className="dialog-message">{message}</span>
      </div>
    )
  }

}

SimpleDialog.propTypes = {
  avatar: propTypes.string,         // 对话头像
  message: propTypes.string,        // 对话内容
}