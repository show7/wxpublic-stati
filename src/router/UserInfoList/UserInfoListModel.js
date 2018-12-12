import { observable, action } from 'mobx'

class UserInfoListModel {

  @observable
  results = [1]

  @action.bound
  setResults (results) {
    this.results = results
  }

}

const userInfoListModel = new UserInfoListModel()
export default userInfoListModel