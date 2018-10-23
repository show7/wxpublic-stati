import store from '../../createStore'
import { setCache } from './cacheReducer'

const cacheUtil = {
  setCache: object => {
    store.dispatch(setCache(object))
  },
  getCache: key => {
    console.log(store.getState())
    return store.getState().cacheReducer[key]
  },
}

export default cacheUtil