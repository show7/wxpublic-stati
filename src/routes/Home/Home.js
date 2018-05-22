import * as React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { injectReducer } from '../../store/reducers'
import { syncSetMessage, deleteList } from './modules/homeReducer'
import homeReducer from './modules/homeReducer'
import store from '../../store/createStore'
import TabBarLayout from '../../layouts/TabBarLayout/TabBarLayout'
import lottie from 'lottie-web'

class Home extends React.Component {

  _onChange (value) {
    const { syncSetMessage } = this.props
    syncSetMessage(value)
  }

  autoConsoleTimer

  componentDidMount () {
    this.autoConsoleTimer = setInterval(() => {
      let selectText = window.getSelection().toString()
      if (selectText.length > 0) {
        console.log(selectText)
      } else {
        console.log('你没有选择任何文字')
      }
    }, 2000)
    // setTimeout(() => {
    //     let node = document.querySelector("#lottie")
    //     lottie.loadAnimation({
    //       container: node,
    //       renderer: 'svg',
    //       loop: true,
    //       autoplay: true,
    //       path: 'https://static.iqycamp.com/data-oq237g70.json'
    //     })
    // }, 1000)
  }

  copyValue () {
    const input = document.createElement('input')
    document.body.appendChild(input)
    input.setAttribute('value', window.getSelection().toString())
    input.select()
    document.execCommand('copy')
    document.body.removeChild(input)
  }

  render () {
    const { message, list } = this.props.home
    const { syncSetMessage, deleteList } = this.props

    return (
      <TabBarLayout>
        <div id="lottie"></div>
        <div id="home"
             className="home-container">
          <h1 onClick={() => this.copyValue()}>Copy</h1>
          <h1>hello world</h1>
          <p>hello world hello world</p>
          <input type="text"
                 id="paste"/>
        </div>
      </TabBarLayout>
    )
  }

}

const mapStateToProps = (state) => ({
  home: state.home,
})

const mapDispatchToProps = (dispatch) => ({
  syncSetMessage: (v) => dispatch(syncSetMessage(v)),
  deleteList: () => dispatch(deleteList()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)