import { observable, action } from 'mobx'

/**
 * 游戏操作相关
 * 1、人物移动控制
 */
class OperatorModel {

  @observable
  xPosition = 3
  @observable
  yPosition = 1
  @observable
  moveable = true

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
  releaseMoveable () {
    this.moveable = true
  }

}

const operatorModel = new OperatorModel()
export default operatorModel