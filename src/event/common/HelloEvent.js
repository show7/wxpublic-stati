import dialogModel from '../../store/model/DialogModel'

const helloEventGenerator = function * () {
  console.log('pre show dialog')
  dialogModel.showDialog()
  yield dialogModel.setDialogData({ message: '嗯嗯' })
  yield dialogModel.setDialogData({ message: '有什么事情么' })
}

const helloEvent = helloEventGenerator()

export default helloEvent