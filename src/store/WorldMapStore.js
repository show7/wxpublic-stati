import { observable, action, computed } from 'mobx'

export default class WorldMapStore {

  @observable
  xPosition = 3

  @observable
  yPosition = 1

  @action.bound
  setPosition (xPosition, yPosition) {
    this.xPosition = xPosition
    this.yPosition = yPosition
  }

}