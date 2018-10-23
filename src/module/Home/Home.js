import * as React from 'react'

export default class Home extends React.Component {

  constructor () {
    super()
  }

  componentDidMount () {
    console.log(this.props)
    setTimeout(() => {
      this.props.history.push('/about')
    }, 1000)
  }

  render () {
    return (
      <div>
        <h1>hello world</h1>
        <h2>this is home page</h2>
      </div>
    )
  }

}