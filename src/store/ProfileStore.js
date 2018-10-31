import { observable, action } from 'mobx'

class ProfileStore {
  @observable timer = 0

  @action resetTimer () {
    this.timer = 0
  }

  @action tick () {
    this.timer += 1
  }

}

const profileStore = new ProfileStore()
export default profileStore