import { observable, action } from 'mobx'

class SpiriteModel {

  @observable
  spirites = [
    {
      xPosition: 3,
      yPosition: 2,
      type: 'icon-moshu2',
      event: 'hello'
    }
  ]

}

const spiriteModel = new SpiriteModel()
export default spiriteModel