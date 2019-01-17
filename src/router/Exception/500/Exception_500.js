import * as React from 'react'
import Exception from 'ant-design-pro/lib/Exception'

export default class Exception_500 extends React.Component {

  render () {
    return (
      <Exception type="500"
                 backText="返回首页"
                 redirect="/wx_public_backend"/>
    )
  }

}