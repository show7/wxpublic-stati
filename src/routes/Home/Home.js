import * as React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { injectReducer } from '../../store/reducers';
import { syncSetMessage, deleteList } from './modules/homeReducer';
import homeReducer from './modules/homeReducer';
import store from '../../store/createStore';
import TabBarLayout from '../../layouts/TabBarLayout/TabBarLayout';

class Home extends React.Component {

  _onChange (value) {
    const { syncSetMessage } = this.props;
    syncSetMessage(value);
  }

  render () {
    const { message, list } = this.props.home;
    const { syncSetMessage, deleteList } = this.props;

    return (
      <TabBarLayout>
        <h1>hello world</h1>
      </TabBarLayout>
    );
  }

}

const mapStateToProps = (state) => ({
  home: state.home,
});

const mapDispatchToProps = (dispatch) => ({
  syncSetMessage: (v) => dispatch(syncSetMessage(v)),
  deleteList: () => dispatch(deleteList()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);