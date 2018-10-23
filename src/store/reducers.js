import { combineReducers } from 'redux'
import cacheReducer from './reducers/cacheReducer/cacheReducer'

const makeRootReducer = (asyncReducers) => {
  return combineReducers({
    cacheReducer: cacheReducer,
    ...asyncReducers
  })
}

/**
 * 注入 reducer
 * @param store
 * @param key
 * @param reducer
 */
const injectReducer = (store, { key, reducer }) => {
  store.asyncReducers[key] = reducer
  store.replaceReducer(makeRootReducer(store.asyncReducers))
}

export { makeRootReducer, injectReducer }