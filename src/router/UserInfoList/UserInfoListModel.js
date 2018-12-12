import { observable, action } from 'mobx'

class UserInfoListModel {

  @observable
  columnData = {}

  @observable
  columnDefinition = []

  @action.bound
  setColumnData (columnData) {
    this.columnData = columnData
  }

  @action.bound
  setColumnDefinition (columnDefinition) {
    this.columnDefinition = columnDefinition
  }

}

const userInfoListModel = new UserInfoListModel()
export default userInfoListModel