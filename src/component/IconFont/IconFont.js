import * as React from 'react'
import propTypes from 'prop-types'

/**
 * 阿里 IconFont 组件封装
 */
export default class IconFont extends React.Component {

  constructor () {
    super()
  }

  render () {
    const {
      className = '',
      iconType = '',
      fontSize = '1rem'
    } = this.props

    return (
      <svg className={`icon ${className}`}
           style={{ fontSize: fontSize }}
           aria-hidden="true">
        <use xlinkHref={`#${iconType}`}></use>
      </svg>
    )
  }

}

IconFont.propTypes = {
  className: propTypes.string,
  iconType: propTypes.string,
  fontSize: propTypes.string
}