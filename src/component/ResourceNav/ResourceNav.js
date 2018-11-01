import * as React from 'react'
import IconFont from '../IconFont/IconFont'
import propTypes from 'prop-types'

import './ResourceNav.less'

export default class ResourceNav extends React.Component {

  constructor () {
    super()
  }

  render () {
    const {
      resources
    } = this.props

    return (
      <div className="resources-nav-component">
        {
          resources.map((resource, index) => {
            return (
              <div className="resource-category"
                   key={index}>
                <IconFont className="resource-icon"
                          fontSize="1.8rem"
                          iconType={resource.iconType}/>
                <span className="resource-amount">{resource.amount}</span>
              </div>
            )
          })
        }
      </div>
    )
  }

}

ResourceNav.propTypes = {
  resources: propTypes.array  // 资源数组 { iconType: 'icon-type', amount: 100 }
}