import { merge } from 'lodash'

// 设定缓存数据
export const SET_CACHE = 'SET_CACHE'

const initState = {}

export const setCache = object => {
  return {
    type: SET_CACHE,
    payload: { ...object }
  }
}

const cacheReducer = (state = initState, action) => {
  switch (action.type) {
    case SET_CACHE:
      state = merge(state, action.payload)
      return { ...state }
    default:
      return state
  }
}

export default cacheReducer
