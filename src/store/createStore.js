import thunk from 'redux-thunk';
import { createStore, compose, combineReducers, applyMiddleware } from 'redux';
import { makeRootReducer } from './reducers';

import * as reducers from './reducers';

const store = createStore(
  makeRootReducer(),
  applyMiddleware(thunk),
);
store.asyncReducers = {};

export default store;