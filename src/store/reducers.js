import { combineReducers } from 'redux';
import homeReducer from '../routes/Home/modules/homeReducer';

export const makeRootReducer = (asyncReducers) => {
  return combineReducers({
    home: homeReducer,
    ...asyncReducers
  });
};

/**
 * 创建 reducer
 * @param initialState
 * @param ACTION_HANDLES
 */
export const createReducer = (initialState, ACTION_HANDLES) => (
  (state = initialState, action) => {
    const handler = ACTION_HANDLES[action.type];
    return handler ? handler(state, action) : state;
  }
);

/**
 * 注入 reducer
 * @param store
 * @param key
 * @param reducer
 */
export const injectReducer = (store, { key, reducer }) => {
  store.asyncReducers[key] = reducer;
  store.replaceReducer(makeRootReducer(store.asyncReducers));
};

export default makeRootReducer;