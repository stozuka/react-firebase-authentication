import * as t from './types';
import firebase from '../firebase/firebase';

function singinOrSignoutSuccess(authData) {
  return {
    type: t.AUTH_USER,
    payload: authData.user.uid,
  };
}

function singoutSuccess() {
  return {
    type: t.AUTH_USER,
    payload: '',
  };
}

function authFail(error) {
  return {
    type: t.AUTH_ERROR,
    payload: error.message,
  };
}

export const setMessage = (message) => {
  return {
    type: t.SET_MESSAGE,
    payload: message,
  };
};

export const signup = ({ email, password }) => async (dispatch) => {
  try {
    const authData = await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password);

    dispatch(singinOrSignoutSuccess(authData));
    dispatch(setMessage('Sign up success!'));
  } catch (error) {
    dispatch(authFail(error));
  }
};

export const signin = ({ email, password }) => async (dispatch) => {
  try {
    const authData = await firebase
      .auth()
      .signInWithEmailAndPassword(email, password);

    dispatch(singinOrSignoutSuccess(authData));
    dispatch(setMessage('Sign in success!'));
  } catch (error) {
    dispatch(authFail(error));
  }
};

export const signout = () => async (dispatch) => {
  try {
    await firebase.auth().signOut();
    dispatch(singoutSuccess());
  } catch (error) {
    dispatch(authFail(error));
  }
};

export const removeMessages = () => {
  return {
    type: t.REMOVE_MESSAGES,
  };
};

export const authStateChange = (state) => {
  return {
    type: t.CHANGE_AUTH_STATE,
    payload: state,
  };
};
