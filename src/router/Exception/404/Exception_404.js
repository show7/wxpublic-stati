import * as React from 'react'
import Exception from 'ant-design-pro/lib/Exception'

export default class Exception_404 extends React.Component {

  render () {
    return (
      <Exception type="404"
                 backText="返回首页"
                 redirect="/wx_public_backend"/>
    )
  }

}