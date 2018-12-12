import { observable } from 'mobx'

class UserInfoListModel {

  @observable
  columnData = []
  @observable
  columnDefinition = []

  @observable
  modalVisible = false
  @observable
  modalTitle = ''
  @observable
  modalColumnDefinition = []
  @observable
  modalColumnData = []

}

const userInfoListModel = new UserInfoListModel()
export default userInfoListModel