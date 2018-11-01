import { observable, action } from 'mobx'
import MapTileUtils from '../../utils/MapTileUtils'
import operatorModel from '../model/OperatorModel'
import spiriteModel from '../model/SpiriteModel'
import helloEvent from '../../event/common/HelloEvent'

class WorldMapController {

  @action.bound
  moveToNextPoint (mapData, nextXPosition, nextYPosition) {
    let nextTileMoveable = MapTileUtils.couldMove(mapData, nextXPosition, nextYPosition)
    if (nextTileMoveable) {
      operatorModel.setPosition(nextXPosition, nextYPosition)
    }
    spiriteModel.spirites.forEach((spirite, index) => {
      if (spirite.xPosition === nextXPosition && spirite.yPosition === nextYPosition) {
        // 精灵位置相等，事件触发
        helloEvent.next()
      }
    })
  }

}

const worldMapController = new WorldMapController()
export default worldMapController