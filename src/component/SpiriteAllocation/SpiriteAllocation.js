import * as React from 'react'
import propTypes from 'prop-types'
import IconFont from '../IconFont/IconFont'

import './SpiriteAllocation.less'

export default class SpiriteAllocation extends React.Component {

  constructor () {
    super()
    this.state = {}
  }

  render () {
    const {
      xPosition,
      yPosition,
      type = 'icon-moshu2'
    } = this.props

    return (
      <div className="spirite-allocation-component"
           style={{ left: xPosition * 32, top: yPosition * 32 }}>
        <IconFont iconType={type}
                  fontSize="3.2rem"/>
      </div>
    )
  }

}

SpiriteAllocation.propTypes = {
  xPosition: propTypes.number,
  yPosition: propTypes.number,
  type: propTypes.string
}