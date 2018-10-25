import * as React from 'react'
import propTypes from 'prop-types'
import WorldTile from '../../Tiles/WorldTile/WorldTile'

export default class BornMap extends React.Component {

  constructor () {
    super()
    this.state = {}
  }

  render () {
    const {
      mapData
    } = this.props

    return (
      <div className="born-map-container">
        {
          mapData.map((line, lineIndex) => {
            return (
              <div key={lineIndex}
                   style={{ height: '32px' }}>
                {
                  line.map((detail, detailIndex) => {
                    return <WorldTile key={detailIndex}
                                      index={detail}/>
                  })
                }
              </div>
            )
          })
        }
      </div>
    )
  }

}

BornMap.propTypes = {
  mapData: propTypes.array.isRequired
}