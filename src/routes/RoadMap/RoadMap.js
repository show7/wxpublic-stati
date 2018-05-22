import * as React from 'react'
import { Grid } from 'antd-mobile'

export default class RoadMap extends React.Component {

  constructor () {
    super()
    this.state = {
      gridData: Array.from(new Array(100).map(() => ({ text: '' }))),
    }
    this.itemStyle = {
      border: '1px solid pink',
    }
  }

  render () {
    const {
      gridData,
    } = this.state

    return (
      <section className="road-map-container">
        <Grid data={gridData}
              columnNum={10}
              itemStyle={this.itemStyle}/>
      </section>
    )
  }

}