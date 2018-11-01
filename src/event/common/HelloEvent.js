import dialogModel from '../../store/model/DialogModel'
import operatorModel from '../../store/model/OperatorModel'

const helloEvent = function * () {
  // 暂停移动
  operatorModel.pauseMoveable()
  // 打开对话框
  dialogModel.showDialog()
  // 更改文案
  dialogModel.setDialogData({ message: '嗯嗯' })
  yield

  // 更改文案
  dialogModel.setDialogData({ message: '有什么事情么' })
  yield

  // 隐藏弹框
  dialogModel.hideDialog()
  // 允许移动
  operatorModel.releaseMoveable()
  yield
}

export default helloEvent