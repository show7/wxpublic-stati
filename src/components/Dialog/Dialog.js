import * as React from 'react'

import './Dialog.less'

export default class Dialog extends React.Component {

  constructor () {
    super()
    this.state = {}
  }

  render () {
    // 文字最大长度设置，不然会溢出
    return (
      <div className="dialog-component">
        <div className="message">全球最大的中文搜索引擎、致力于让网民更便捷地获取信息，找到所求。百度超过千亿的中文网页数据库，可以瞬间找到相关的搜索结果。</div>
      </div>
    )
  }

}