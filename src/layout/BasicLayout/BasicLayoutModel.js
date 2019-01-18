import { observable, action } from 'mobx'
import Api from '../../api/Api'

class BasicLayoutModel {

  @observable
  showLeftSider = false
  @observable
  userInfo = {
    riseId: '',
    avatar: '',
    nickName: ''
  }

  @action.bound
  async loadUserInfo () {
    let userInfoRes = await Api.base_loadUserInfo()
    this.userInfo = userInfoRes.msg
  }

  /**
   * 登出
   */
  @action.bound
  logout () {
    document.cookie = ''
    window.location.href = `${window.location.protocol}//${window.location.host}/wx_public_backend/login`
  }

  @action.bound
  handleShowLeftSider () {
    this.showLeftSider = true
  }

  @action.bound
  handleCloseLeftSider () {
    this.showLeftSider = false
  }

  @action.bound
  handleToggleLeftSiderStatus () {
    this.showLeftSider = !this.showLeftSider
  }

}

const basicLayoutModel = new BasicLayoutModel()
export default basicLayoutModel