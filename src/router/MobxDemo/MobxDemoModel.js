import { observable, action } from 'mobx'

class MobxDemoModel {

  @observable
  name = '三十文'
  @observable
  age = 20

  @action.bound
  setName (name) {
    this.name = name
  }

}

const mobxDemoModel = new MobxDemoModel()
export default mobxDemoModel