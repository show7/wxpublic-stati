import * as React from 'react'
import './RoadMap.less'
import { Grid } from 'antd-mobile'

export default class RoadMap extends React.Component {

  constructor () {
    super()
    this.state = {
      position: {
        x: 0,
        y: 0,
      },
      gridData: Array.from(new Array(10)).map((_val, i) => ({
        index: i,
      })),
    }
    this.itemStyle = {
      border: '1px solid pink',
    }
  }

  render () {
    const {
      position,
      gridData,
    } = this.state

    const renderMap = () => {
      let gridList = []
      for (let i = 0; i < 10; i++) {
        gridList.push(
          <Grid key={i}
                data={gridData}
                hasLine={true}
                itemStyle={this.itemStyle}
                columnNum={10}
                renderItem={item => {
                  return (
                    <div id={`grid-item-${item.index}-${i}`}
                         className={`${position.x === item.index && position.y === i && 'active'}`}></div>
                  )
                }}
                onClick={(object, index) => {
                  let preActiveNodes = document.querySelectorAll('.active')
                  preActiveNodes.forEach(preActiveNode => preActiveNode.classList.remove('active'))
                  let itemNode = document.getElementById(`grid-item-${index}-${i}`)
                  itemNode.classList.add('active')
                }}/>,
        )
      }
      return gridList
    }

    return (
      <section className="road-map-container">
        <div>
          {/*{renderMap()}*/}
        </div>
        <h1 onClick={() => {
          this.setState({
            position: { x: position.x, y: position.y - 1 },
          })
        }}>上 </h1>
        <h1 onClick={() => {
          this.setState({
            position: { x: position.x, y: position.y + 1 },
          })
        }}>下 </h1>
        <h1 onClick={() => {
          this.setState({
            position: { x: position.x - 1, y: position.y },
          })
        }}>左 </h1>
        <h1 onClick={() => {
          this.setState({
            position: { x: position.x + 1, y: position.y },
          })
        }}>右 </h1>
        <svg class="icon">
          <use xlinkHref="#icon-zhushou"></use>
        </svg>
        <i className="iconfont icon-camera"></i>
      </section>
    )
  }

}