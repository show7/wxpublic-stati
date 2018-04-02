import * as React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { asyncSetMessage } from './modules/homeActions'
import InputPreview from '../../components/InputPreview'

@connect(state => state)
export default class Home extends React.Component {

  _onChange (value) {
    this.props.dispatch(asyncSetMessage(value))
  }

  render () {
    const { message } = this.props.homeReducer

    return (
      <div>
        <InputPreview value={message} onChange={(value) => this._onChange(value)}/>
        <Link to={'/about'}>
          <button>Go About</button>
        </Link>
      </div>
    )
  }

}

// export default connect(state => state)(Home)