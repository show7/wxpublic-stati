import * as React from 'react'
import WorldMapTile from '../../WorldMapTile/WorldMapTile'

export default class NanTong extends React.Component {

  constructor () {
    super()
    this.state = {}
    this.mapData = [
      [18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 55, 55, 18],
      [18, 18, 18, 17, 17, 17, 17, 17, 17, 17, 17, 17, 55, 55, 18],
      [18, 18, 17, 17, 17, 17, 18, 18, 17, 17, 17, 17, 55, 55, 18],
      [18, 17, 17, 17, 18, 18, 18, 18, 18, 17, 17, 55, 55, 17, 18],
      [18, 17, 17, 18, 22, 23, 23, 23, 24, 18, 17, 55, 55, 17, 18],
      [18, 17, 17, 18, 25, 28, 26, 79, 27, 18, 55, 55, 17, 17, 18],
      [18, 17, 17, 17, 17, 10, 11, 12, 18, 18, 55, 55, 17, 17, 18],
      [18, 18, 17, 17, 10, 16, 16, 16, 11, 55, 55, 17, 17, 17, 18],
      [18, 18, 17, 17, 77, 16, 16, 16, 16, 21, 21, 17, 17, 17, 18],
      [18, 18, 18, 18, 18, 18, 18, 18, 18, 55, 55, 18, 18, 18, 18]
    ]
  }

  /**
   * 获取当前地图定位的二维数组
   * @returns {number[][]|*[]}
   */
  getMapData () {
    return this.mapData
  }

  render () {
    return (
      <div className="nan-tong-component">
        {
          this.mapData.map((lines, lineIndex) => {
            return (
              <div key={lineIndex}
                   style={{ height: '32px' }}>
                {
                  lines.map((sequenceData, detailIndex) => {
                    return <WorldMapTile key={detailIndex}
                                         tileSequence={sequenceData}/>
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