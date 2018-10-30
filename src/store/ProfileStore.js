import { observable, action } from 'mobx'

export default class ProfileStore {
  @observable timer = 0

  @action resetTimer () {
    this.timer = 0
  }

  @action tick () {
    this.timer += 1
  }

}
