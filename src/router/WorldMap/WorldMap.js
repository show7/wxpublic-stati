import * as React from 'react'
import { observer, inject } from 'mobx-react'
import NanTong from '../../component/WorldMaps/NanTong/NanTong'
import KeyBind from '../../utils/KeyBind'
import Movement from '../../component/Character/Movement/Movement'
import SimpleDialog from '../../component/SimpleDialog/SimpleDialog'
import SpiriteAllocation from '../../component/SpiriteAllocation/SpiriteAllocation'
import ResourceNav from '../../component/ResourceNav/ResourceNav'

import './WorldMap.less'

@inject('worldMapController')
@observer
export default class WorldMap extends React.Component {

  constructor () {
    super()
    this.state = {}
  }

  componentDidMount () {
    console.log(this.props)
    window.addEventListener('keydown', this.keyDownFunction.bind(this), false)
    window.addEventListener('click', this.mouseClickFunction.bind(this), false)
  }

  componentWillUnmount () {
    window.removeEventListener('keydown', this.keyDownFunction.bind(this))
    window.removeEventListener('click', this.mouseClickFunction.bind(this))
  }

  keyDownFunction (event) {
    const { worldMapController } = this.props
    const { dialogModel, operatorModel, spiriteModel } = this.props.worldMapController.models
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

  mouseClickFunction (event) {
    this.props.worldMapController.clickCurrentPage()
  }

  render () {
    const { dialogModel, operatorModel, spiriteModel, homelandModel } = this.props.worldMapController.models

    return (
      <div className="world-map-container">
        <ResourceNav resources={homelandModel.resources}/>
        <NanTong ref="mapInstance">
          <Movement xPosition={operatorModel.xPosition}
                    yPosition={operatorModel.yPosition}/>
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
          {
            dialogModel.show &&
            <SimpleDialog avatar={dialogModel.avatar}
                          message={dialogModel.message}/>
          }
        </NanTong>
      </div>
    )
  }

}