import dialogModel from '../../store/model/DialogModel'
import operatorModel from '../../store/model/OperatorModel'

const helloEvent = function * () {
  // 暂停移动
  operatorModel.pauseMoveable()
  // 打开对话框
  dialogModel.showDialog()
  // 更改文案
  dialogModel.setDialogData({ message: '你好，我是欢迎机器人' })
  yield

  // 更改文案
  dialogModel.setDialogData({ message: '这是一个 demo 世界' })
  yield

  dialogModel.setDialogData({ message: '欢迎下次再来' })
  yield

  // 隐藏弹框
  dialogModel.hideDialog()
  // 允许移动
  operatorModel.releaseMoveable()
  yield
}

export default helloEvent