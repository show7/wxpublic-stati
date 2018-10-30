import * as React from 'react'
import NanTong from '../../component/WorldMaps/NanTong/NanTong'
import KeyBind from '../../utils/KeyBind'
import Movement from '../../component/Character/Movement/Movement'
import MapTilesUtils from '../../utils/MapTilesUtils'

export default class WorldMap extends React.Component {

  constructor () {
    super()
    this.state = {
      xPosition: 5,
      yPosition: 1
    }
  }

  componentDidMount () {
    window.addEventListener('keydown', this.keyBindFunction.bind(this))
  }

  componentWillUnmount () {
    window.removeEventListener('keydown', this.keyBindFunction.bind(this))
  }

  keyBindFunction (event) {
    const {
      xPosition,
      yPosition
    } = this.state
    const mapData = this.refs.mapInstance.getMapData()
    let keyCode = event.keyCode
    let nextTileType
    switch (keyCode) {
      case KeyBind.ArrowUp:
        if (MapTilesUtils.couldMove(mapData, xPosition, yPosition - 1)) {
          this.setState({ yPosition: yPosition - 1 })
        }
        break
      case KeyBind.ArrowDown:
        if (MapTilesUtils.couldMove(mapData, xPosition, yPosition + 1)) {
          this.setState({ yPosition: yPosition + 1 })
        }
        break
      case KeyBind.ArrowLeft:
        if (MapTilesUtils.couldMove(mapData, xPosition - 1, yPosition)) {
          this.setState({ xPosition: xPosition - 1 })
        }
        break
      case KeyBind.ArrowRight:
        if (MapTilesUtils.couldMove(mapData, xPosition + 1, yPosition)) {
          this.setState({ xPosition: xPosition + 1 })
        }
        break
    }
  }

  render () {
    const {
      xPosition,
      yPosition
    } = this.state

    return (
      <div className="world-map-container">
        <NanTong ref="mapInstance"/>
        <Movement xPosition={xPosition}
                  yPosition={yPosition}/>
      </div>
    )
  }

}