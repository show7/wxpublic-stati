import * as React from 'react'
import propTypes from 'prop-types'

export default class WorldTile extends React.Component {

  constructor () {
    super()
    this.state = {}
  }

  shouldComponentUpdate () {
    return false
  }

  getInnerStyle () {
    // 所有瓦片地图一行十个，最多十行，最后一个为空白
    const {
      index = 99
    } = this.props

    let xOffSet = index % 10
    let yOffSet = Math.floor(index / 10)

    return {
      fontsize: 30,
      display: 'inline-block',
      width: '32px',
      height: '32px',
      background: `url(https://static.iqycamp.com/world-map-yjzyqr65.jpg)`,
      backgroundPosition: `-${xOffSet * 32}px -${yOffSet * 32}px`
    }
  }

  render () {
    return (
      <div className="world-tile-component"
           style={this.getInnerStyle()}>{this.props.index}</div>
    )
  }

}

WorldTile.propTypes = {
  index: propTypes.number // 瓦片图顺序
}