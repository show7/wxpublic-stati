import * as React from 'react'

export default class About extends React.Component {

  constructor () {
    super()
  }

  componentDidMount () {
    console.log('about did mount:', window.require('electron'))
  }

  render () {
    return (
      <div>
        <h1>this is about page</h1>
      </div>
    )
  }

}