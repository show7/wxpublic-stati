import { observable, action } from 'mobx'

class HomelandModel {

  @observable
  resources = [
    { iconType: 'icon-zihangche', amount: 100 },
    { iconType: 'icon-zhushou', amount: 120 },
    { iconType: 'icon-zhangpeng', amount: 140 },
    { iconType: 'icon-zashua1', amount: 160 },
    { iconType: 'icon-zashua', amount: 180 },
    { iconType: 'icon-yanhua', amount: 200 },
  ]

}

const homelandModel = new HomelandModel()
export default homelandModel