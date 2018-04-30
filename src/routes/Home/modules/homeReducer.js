export const SET_MESSAGE = 'SET_MESSAGE';
export const DELETE_LIST = 'DELETE_LIST';

const initState = {
  message: '',
  list: [1, 2],
};

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

export const deleteList = () => {
  return {
    type: DELETE_LIST,
  };
};

const homeReducer = (state = initState, action) => {
  switch (action.type) {
    case SET_MESSAGE:
      return { ...state, message: action.payload.message };
    case DELETE_LIST:
      return { ...state, list: [] };
    default:
      return state;
  }
};

export default homeReducer;