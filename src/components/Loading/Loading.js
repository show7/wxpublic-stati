import * as React from 'react'
import cacheUtil from '../../store/reducers/cacheReducer/cacheUtil'

export default class Loading extends React.Component {

  constructor () {
    super()
    this.state = {}
  }

  componentDidMount () {
    // 测试 redux 的缓存实现
    cacheUtil.setCache({ name: '三十文' })
    console.log(cacheUtil.getCache('name'))
  }

  render () {
    return (
      <div className="loading-container"></div>
    )
  }

}