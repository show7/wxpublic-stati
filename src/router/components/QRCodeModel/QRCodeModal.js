import * as React from 'react'
import PropTypes from 'prop-types'
import { Modal, Button } from 'antd'
import { isMobileWidth } from '../../../utils/utils'

import './QRCodeModal.less'

export default class QRCodeModal extends React.Component {

  render () {
    const { isVisible, qrCode, closeCallback } = this.props
    return (
      <Modal className="qr-code-model-component"
             title={isMobileWidth() ? '长按保存二维码' : '右键复制二维码'}
             visible={isVisible}
             footer={null}
             onCancel={() => closeCallback()}>
        <img src={qrCode}
             alt="二维码链接"/>
      </Modal>
    )
  }

}

QRCodeModal.propTypes = {
  isVisible: PropTypes.bool,
  qrCode: PropTypes.string, // 二维码链接
  closeCallback: PropTypes.func, // 关闭按钮
}