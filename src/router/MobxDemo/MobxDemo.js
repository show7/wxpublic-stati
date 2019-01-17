import * as React from 'react'
import { Button } from 'antd'
import { observer, inject } from 'mobx-react'

@inject('mobxDemoModel')
@observer
export default class MobxDemo extends React.Component {

  constructor () {
    super()
  }

  componentDidMount () {
    console.log(this.props)
  }

  changeName () {
    this.props.mobxDemoModel.setName('上海晓圈')
  }

  render () {
    return (
      <div>
        <Button onClick={() => this.changeName()}
                type="primary">Primary</Button>
        <div>{this.props.mobxDemoModel.name}</div>
      </div>
    )
  }

}