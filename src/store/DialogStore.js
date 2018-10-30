import { observable, action, computed } from 'mobx'

export default class DialogStore {

  @observable showDialog = false

  @observable dialog = {
    avatar: '',
    message: ''
  }

}