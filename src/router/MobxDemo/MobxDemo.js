import * as React from 'react'
import { observer, inject } from 'mobx-react'

@inject("profileStore")
@observer
export default class MobxDemo extends React.Component {

  constructor () {
    super()
  }

  componentDidMount () {
    console.log(this.props)
  }

  render () {
    return (
      <div>
        <div>{this.props.profileStore.timer}</div>
      </div>
    )
  }

}