import * as React from 'react'
import propTypes from 'prop-types'
import IconFont from '../../IconFont/IconFont'

import './Movement.less'

/**
 * WorldMap 中移动对象
 */
export default class Movement extends React.Component {

  constructor () {
    super()
  }

  render () {
    const {
      xPosition,
      yPosition
    } = this.props

    return (
      <div className="movement-component"
           style={{ left: xPosition * 32, top: yPosition * 32 }}>
        <IconFont iconType="icon-huoche"
                  fontSize="3.2rem"/>
      </div>
    )
  }

}

Movement.propTypes = {
  xPosition: propTypes.number.isRequired,
  yPosition: propTypes.number.isRequired
}