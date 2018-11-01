import * as React from 'react'
import { observer, inject } from 'mobx-react'
import NanTong from '../../component/WorldMaps/NanTong/NanTong'
import KeyBind from '../../utils/KeyBind'
import Movement from '../../component/Character/Movement/Movement'
import SpiriteAllocation from '../../component/SpiriteAllocation/SpiriteAllocation'
import SimpleDialog from '../../component/SimpleDialog/SimpleDialog'

import './WorldMap.less'

@inject(
  'worldMapController',
  'dialogModel',
  'operatorModel',
  'spiriteModel'
)
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
      worldMapController,
      dialogModel,
      operatorModel,
      spiriteModel
    } = this.props
    const mapData = this.refs.mapInstance.getMapData()
    switch (event.keyCode) {
      case KeyBind.ArrowUp:
        worldMapController.moveToNextPoint(mapData, operatorModel.xPosition, operatorModel.yPosition - 1)
        break
      case KeyBind.ArrowDown:
        worldMapController.moveToNextPoint(mapData, operatorModel.xPosition, operatorModel.yPosition + 1)
        break
      case KeyBind.ArrowLeft:
        worldMapController.moveToNextPoint(mapData, operatorModel.xPosition - 1, operatorModel.yPosition)
        break
      case KeyBind.ArrowRight:
        worldMapController.moveToNextPoint(mapData, operatorModel.xPosition + 1, operatorModel.yPosition)
        break
      default:
        break
    }
  }

  render () {
    const {
      dialogModel,
      operatorModel,
      spiriteModel
    } = this.props

    return (
      <div className="world-map-container">
        {/* 地图 */}
        <NanTong ref="mapInstance"/>
        {/* 人物 */}
        <Movement xPosition={operatorModel.xPosition}
                  yPosition={operatorModel.yPosition}/>
        {/* 地图事件地址 */}
        <div className="spirites">
          {
            spiriteModel.spirites.map((spirite, index) => {
              return <SpiriteAllocation key={index}
                                        xPosition={spirite.xPosition}
                                        yPosition={spirite.yPosition}
                                        type={spirite.type}/>
            })
          }
        </div>
        {/* 对话窗口 */}
        {
          dialogModel.show &&
          <SimpleDialog avatar={dialogModel.avatar}
                        message={dialogModel.message}/>
        }
      </div>
    )
  }

}