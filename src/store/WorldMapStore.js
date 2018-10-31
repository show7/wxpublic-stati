import { observable, action } from 'mobx'
import MapTileUtils from '../utils/MapTileUtils'

class WorldMapStore {

  @observable
  xPosition = 3
  @observable
  yPosition = 1
  @observable
  moveable = true
  @observable
  spirites = [
    {
      xPosition: 3,
      yPosition: 2,
      type: 'icon-moshu2',
      event: 'hello'
    }
  ]

  @action.bound
  setPosition (xPosition, yPosition) {
    this.xPosition = xPosition
    this.yPosition = yPosition
  }

  @action.bound
  pauseMoveable () {
    this.moveable = false
  }

  @action.bound
  restoreMoveable () {
    this.moveable = true
  }

  @action.bound
  moveToNextPoint (mapData, nextXPosition, nextYPosition) {
    let nextTileMoveable = MapTileUtils.couldMove(mapData, nextXPosition, nextYPosition)
    this.xPosition = nextXPosition
    this.yPosition = nextYPosition
    this.spirites.forEach((spirite, index) => {
      if (spirite.xPosition === nextXPosition && spirite.yPosition === nextYPosition) {
        // 精灵位置相等，事件触发
        setTimeout(() => {
          alert('hello world')
        })
      }
    })
  }
}

const worldMapStore = new WorldMapStore()
export default worldMapStore