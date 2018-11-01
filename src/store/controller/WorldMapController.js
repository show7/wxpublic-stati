import { observable, action } from 'mobx'
import MapTileUtils from '../../utils/MapTileUtils'
import CommonEvent from '../../event/common'
import dialogModel from '../model/DialogModel'
import operatorModel from '../model/OperatorModel'
import spiriteModel from '../model/SpiriteModel'
import homelandModel from '../model/HomelandModel'

class WorldMapController {

  @observable
  models = {
    dialogModel: dialogModel,
    operatorModel: operatorModel,
    spiriteModel: spiriteModel,
    homelandModel: homelandModel
  }

  currentEvent = undefined

  @action.bound
  moveToNextPoint (mapData, nextXPosition, nextYPosition) {
    // 如果当前操作器不允许移动，直接返回
    if (!operatorModel.moveable) {
      return
    }
    let nextTileMoveable = MapTileUtils.couldMove(mapData, nextXPosition, nextYPosition)
    if (nextTileMoveable) {
      operatorModel.setPosition(nextXPosition, nextYPosition)
    }
    spiriteModel.spirites.forEach((spirite, index) => {
      if (spirite.xPosition === nextXPosition && spirite.yPosition === nextYPosition) {
        // 精灵位置相等，事件触发
        this.currentEvent = new CommonEvent.HelloEvent()
        // 手动自启动第一轮
        this.currentEvent.next()
      }
    })
  }

  @action.bound
  clickCurrentPage () {
    if (this.currentEvent) {
      this.currentEvent.next()
    }
  }

}

const worldMapController = new WorldMapController()
export default worldMapController