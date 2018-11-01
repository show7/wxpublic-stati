import * as React from 'react'
import propTypes from 'prop-types'

export default class Audio extends React.Component {

  constructor () {
    super()
  }

  render () {
    const {
      src,
      autoPlay = false,
      loop = false
    } = this.props

    return (
      <audio src={src}
             autoPlay={autoPlay}
             loop={loop}></audio>
    )
  }

}

Audio.propTypes = {
  src: propTypes.string,      // 音频资源链接
  autoPlay: propTypes.bool,   // 是否自动播放
  loop: propTypes.bool,       // 是否循环播放
}