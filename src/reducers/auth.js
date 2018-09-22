import * as t from '../actions/types';

const INITIAL_STATE = {
  login: '',
  message: '',
  errorMessage: '',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case t.AUTH_USER:
      return {
        ...state,
        message: action.payload,
      };
    case t.AUTH_ERROR:
      return {
        ...state,
        message: '',
        errorMessage: action.payload,
      };
    case t.SET_MESSAGE:
      return {
        ...state,
        message: action.payload,
        errorMessage: '',
      };
    case t.REMOVE_MESSAGES:
      return {
        ...state,
        message: '',
        errorMessage: '',
      };
    case t.CHANGE_AUTH_STATE:
      return {
        ...state,
        login: action.payload,
      };
    default:
      return state;
  }
};
