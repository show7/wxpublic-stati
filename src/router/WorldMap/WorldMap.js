import * as React from 'react'
import { observer, inject } from 'mobx-react'
import NanTong from '../../component/WorldMaps/NanTong/NanTong'
import KeyBind from '../../utils/KeyBind'
import Movement from '../../component/Character/Movement/Movement'
import SpiriteAllocation from '../../component/SpiriteAllocation/SpiriteAllocation'

@inject('worldMapStore')
@observer
export default class WorldMap extends React.Component {

  constructor () {
    super()
    this.state = {}
  }

  componentDidMount () {
    console.log(this.props)
    window.addEventListener('keydown', this.keyBindFunction.bind(this))
  }

  componentWillUnmount () {
    window.removeEventListener('keydown', this.keyBindFunction.bind(this))
  }

  keyBindFunction (event) {
    const {
      xPosition,
      yPosition,
      setPosition,
      moveToNextPoint
    } = this.props.worldMapStore
    const mapData = this.refs.mapInstance.getMapData()
    switch (event.keyCode) {
      case KeyBind.ArrowUp:
        moveToNextPoint(mapData, xPosition, yPosition - 1)
        break
      case KeyBind.ArrowDown:
        moveToNextPoint(mapData, xPosition, yPosition + 1)
        break
      case KeyBind.ArrowLeft:
        moveToNextPoint(mapData, xPosition - 1, yPosition)
        break
      case KeyBind.ArrowRight:
        moveToNextPoint(mapData, xPosition + 1, yPosition)
        break
      default:
        break
    }
  }

  render () {
    const {
      xPosition,
      yPosition,
      spirites
    } = this.props.worldMapStore

    return (
      <div className="world-map-container">
        <NanTong ref="mapInstance"/>
        <Movement xPosition={xPosition}
                  yPosition={yPosition}/>
        <div className="spirites">
          {
            spirites.map((spirite, index) => {
              return <SpiriteAllocation key={index}
                                        xPosition={spirite.xPosition}
                                        yPosition={spirite.yPosition}
                                        type={spirite.type}/>
            })
          }
        </div>
      </div>
    )
  }

}