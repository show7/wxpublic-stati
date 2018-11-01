import * as React from 'react'
import propTypes from 'prop-types'

/**
 * 地图瓦片
 */
export default class WorldMapTile extends React.Component {

  constructor () {
    super()
    this.state = {}
  }

  shouldComponentUpdate () {
    return false
  }

  getInnerStyle () {
    // 所有瓦片地图设计时候一行十个，最多十行，最后一个为空白
    const {
      tileSequence = 99
    } = this.props

    let xOffSet = tileSequence % 10
    let yOffSet = Math.floor(tileSequence / 10)

    return {
      fontsize: 30,
      display: 'inline-block',
      width: '3.2rem',
      height: '3.2rem',
      background: `url(https://static.iqycamp.com/world-map-yjzyqr65.jpg)`,
      backgroundPosition: `-${xOffSet * 32 / 10}rem -${yOffSet * 32 / 10}rem`
    }
  }

  render () {
    const {
      tileSequence = 0
    } = this.props

    return (
      <div className="world-tile-component"
           style={this.getInnerStyle()}>{tileSequence}</div>
    )
  }

}

WorldMapTile.propTypes = {
  tileSequence: propTypes.number // 瓦片图顺序
}