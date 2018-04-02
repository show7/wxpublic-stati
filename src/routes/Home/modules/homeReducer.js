import { SET_MESSAGE } from './homeActions'

const initState = {
  message: '',
}

const homeReducer = (state = initState, action) => {
  switch (action.type) {
    case SET_MESSAGE:
      return { ...state, message: action.payload.message }
    default:
      return state
  }
}

export default homeReducer