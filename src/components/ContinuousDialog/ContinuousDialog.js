import * as React from 'react'
import DialogBox from '../DialogBox/DialogBox'

export default class ContinuousDialog extends React.Component {

  constructor () {
    super()
    this.state = {
      showDialog: false,
      currentAvatar: '',
      currentMessage: '',
      currentMessageOffSet: 0
    }
  }

  componentDidMount () {
    const {
      dialogObject
    } = this.props
    this.setState({
      showDialog: true,
      currentAvatar: dialogObject.profile.avatar,
      currentMessage: dialogObject.message[0],
      currentMessageOffSet: 0
    })
  }

  handleClickDialogBox () {
    const {
      currentMessageOffSet
    } = this.state
    const {
      dialogObject
    } = this.props
    if (currentMessageOffSet >= dialogObject.message.length - 1) {
      // 点击应该关闭当前对话框
      this.setState({
        showDialog: false
      })
    } else {
      this.setState({
        currentMessage: dialogObject.message[currentMessageOffSet + 1],
        currentMessageOffSet: currentMessageOffSet + 1
      })
    }
    console.log('hello ')
  }

  render () {
    const {
      showDialog,
      currentAvatar,
      currentMessage
    } = this.state
    const {
      dialogObject
    } = this.props

    if (!showDialog) {
      return <div></div>
    }

    return (
      <div onClick={() => this.handleClickDialogBox()}>
        <DialogBox dialogAvatar={currentAvatar}
                   dialogMessage={currentMessage}/>
      </div>
    )
  }

}