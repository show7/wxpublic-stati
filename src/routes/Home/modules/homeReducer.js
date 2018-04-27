export const SET_MESSAGE = 'SET_MESSAGE';

export const asyncSetMessage = (message) => {
  return dispatch => {
    dispatch({
      type: SET_MESSAGE,
      payload: {
        message,
      },
    });
  };
};

export const syncSetMessage = (message) => {
  return {
    type: SET_MESSAGE,
    payload: {
      message,
    },
  };
};

const initState = {
  message: '',
};

const homeReducer = (state = initState, action) => {
  switch (action.type) {
    case SET_MESSAGE:
      return { ...state, message: action.payload.message };
    default:
      return state;
  }
};

export default homeReducer;