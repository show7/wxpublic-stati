export const SET_MESSAGE = 'SET_MESSAGE'

export const asyncSetMessage = (message) => {
  return dispatch => {
    dispatch({
      type: SET_MESSAGE,
      payload: {
        message,
      },
    })
  }
}

export const syncSetMessage = (message) => {
  return {
    type: SET_MESSAGE,
    payload: {
      message,
    },
  }
}