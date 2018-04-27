import * as React from 'react';
import { Link } from 'react-router-dom';
import InputPreview from '../../components/InputPreview';
import { connect } from 'react-redux';
import { syncSetMessage } from './modules/homeReducer';
import { injectReducer } from '../../store/reducers';
import homeReducer from './modules/homeReducer';
import store from '../../store/createStore';

class Home extends React.Component {

  _onChange (value) {
    const { syncSetMessage } = this.props;
    syncSetMessage(value);
  }

  render () {
    const { message } = this.props.home;

    return (
      <div>
        <InputPreview value={message}
                      onChange={(value) => this._onChange(value)}/>
        <Link to={'/about'}>
          <button>Go About</button>
        </Link>
      </div>
    );
  }

}

const mapStateToProps = (state) => ({
  home: state.home,
});

const mapDispatchToProps = (dispatch) => ({
  syncSetMessage: (v) => dispatch(syncSetMessage(v)),
});

export default () => {
  injectReducer(store, { key: 'home', reducer: homeReducer });
  return connect(mapStateToProps, mapDispatchToProps)(Home);
}