import * as React from 'react'

export default class DelayRender extends React.Component {

  state = {
    isShow: false
  }

  componentDidMount () {
    setTimeout(() => {
      this.setState({ isShow: true })
    }, 0)
  }

  render () {
    if (this.state.isShow) {
      return <div>{this.props.children}</div>
    } else {
      return <div></div>
    }
  }

}