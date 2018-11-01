import { observable, action } from 'mobx'

class DialogModel {

  // 是否展示对话框
  @observable
  show = false
  // 对话左侧头像
  @observable
  avatar = 'https://thirdwx.qlogo.cn/mmopen/siaKjia9aBPcJHOCEV6z4Ayic3SEaztBgIHFjfNZCFnvibW7bURBmYJIwfoRgN2guicWOGEPX1S05NqJyTwA1EzoIJgWEdJg3nXlZ/132'
  // 对话主要内容
  @observable
  message = '你好，世界'
  // 对话选项
  @observable
  choices = [
    {
      text: 'YES'
    },
    {
      text: 'NO'
    }
  ]

  @action.bound
  showDialog () {
    this.show = true
  }

  @action.bound
  hideDialog () {
    this.show = false
  }

  @action.bound
  setDialogData (params) {
    for (let key in params) {
      if (params.hasOwnProperty(key)) {
        this[key] = params[key]
      }
    }
  }

}

const dialogModel = new DialogModel()
export default dialogModel