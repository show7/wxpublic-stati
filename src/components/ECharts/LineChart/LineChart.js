import * as React from 'react'
import echarts from 'echarts'
import PropTypes from 'prop-types'

export default class LineChart extends React.Component {

  state = {
    innerClassName: `line-chart-${Math.floor(Math.random() * 1000)}`
  }

  componentDidMount () {
    const {
      title = '标题',
      xAxisCategory = ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
      seriesData = [120, 132, 101, 134, 90, 230, 210]
    } = this.props

    let chartNode = echarts.init(document.querySelector(`.${this.state.innerClassName}`))
    chartNode.setOption({
      title: {
        text: title
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          label: {
            backgroundColor: '#6a7985'
          }
        }
      },
      xAxis: [
        {
          type: 'category',
          data: xAxisCategory
        }
      ],
      yAxis: [
        {
          type: 'value'
        }
      ],
      series: [
        {
          type: 'line',
          data: seriesData,
          itemStyle: {
            color: '#1890ff'
          }
        }
      ]
    })
  }

  render () {
    const { className = '', width = '100%', height = 300 } = this.props

    return (
      <div className={`line-chart ${className} ${this.state.innerClassName}`}
           style={{ width: width, height: height }}>

      </div>
    )
  }

}

LineChart.propTypes = {
  className: PropTypes.string,
  width: PropTypes.any,
  height: PropTypes.any,
  title: PropTypes.string,
  xAxisCategory: PropTypes.array,
  seriesData: PropTypes.array,
}