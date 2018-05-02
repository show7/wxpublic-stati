import { combineReducers } from 'redux';
import homeReducer from '../routes/Home/modules/homeReducer';

const makeRootReducer = (asyncReducers) => {
  return combineReducers({
    home: homeReducer,
    ...asyncReducers
  });
};

/**
 * 注入 reducer
 * @param store
 * @param key
 * @param reducer
 */
const injectReducer = (store, { key, reducer }) => {
  store.asyncReducers[key] = reducer;
  store.replaceReducer(makeRootReducer(store.asyncReducers));
};

export { makeRootReducer, injectReducer };