import * as React from 'react'
import propTypes from 'prop-types'

import './Movement.less'

export default class Movement extends React.Component {

  constructor () {
    super()
  }

  render () {
    const {
      xPosition = 1,
      yPosition = 2
    } = this.props

    return (
      <div className="movement-component"
           style={{ left: xPosition * 32, top: yPosition * 32 }}>

      </div>
    )
  }

}

Movement.propTypes = {
  xPosition: propTypes.number,
  yPosition: propTypes.number
}