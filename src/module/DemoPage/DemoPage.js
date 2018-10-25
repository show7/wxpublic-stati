import * as React from 'react'
import KeyBind from '../../utils/keyBind'
import Movement from '../../components/Character/Movement/Movement'
import BornMap from '../../components/Maps/BornMap/BornMap'
import WorldTiles from '../../utils/tiles/WorldTiles'
import Dialog from '../../components/Dialog/Dialog'

export default class DemoPage extends React.Component {

  constructor () {
    super()
    this.state = {
      xPosition: 5,
      yPosition: 1
    }
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

  componentDidMount () {
    window.addEventListener('keydown', this.keyBindFunction.bind(this))
  }

  componentWillUnmount () {
    window.removeEventListener('keydown', this.keyBindFunction.bind(this))
  }

  keyBindFunction (event) {
    const {
      xPosition,
      yPosition
    } = this.state
    let keyCode = event.keyCode
    let nextTileType
    switch (keyCode) {
      case KeyBind.ArrowUp:
        if (WorldTiles.couldMove(this.mapData, xPosition, yPosition - 1)) {
          this.setState({ yPosition: yPosition - 1 })
        }
        break
      case KeyBind.ArrowDown:
        if (WorldTiles.couldMove(this.mapData, xPosition, yPosition + 1)) {
          this.setState({ yPosition: yPosition + 1 })
        }
        break
      case KeyBind.ArrowLeft:
        if (WorldTiles.couldMove(this.mapData, xPosition - 1, yPosition)) {
          this.setState({ xPosition: xPosition - 1 })
        }
        break
      case KeyBind.ArrowRight:
        if (WorldTiles.couldMove(this.mapData, xPosition + 1, yPosition)) {
          this.setState({ xPosition: xPosition + 1 })
        }
        break
    }
  }

  render () {
    const {
      xPosition,
      yPosition
    } = this.state

    return (
      <div style={{ width: 32 * 15, height: 32 * 10, margin: '0 auto',position: 'relative' }}>
        <BornMap mapData={this.mapData}/>
        <Movement xPosition={xPosition}
                  yPosition={yPosition}/>
        <Dialog/>
      </div>
    )
  }

}