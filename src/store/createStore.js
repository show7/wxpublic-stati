import thunk from 'redux-thunk'
import { applyMiddleware, createStore } from 'redux'
import { makeRootReducer } from './reducers'

const store = createStore(
  makeRootReducer(),
  applyMiddleware(thunk),
)
store.asyncReducers = {}

export default store