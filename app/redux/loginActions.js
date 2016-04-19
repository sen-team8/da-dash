import login from '../network/auth';

export const LOGGED_IN = 'LOGGED_IN';
export const LOGGING = 'LOGGING';
export const LOGGED_OUT = 'LOGGED_OUT';
export const LOGIN_ERROR = 'LOGIN_ERROR';
export const SET_CREDENTIALS = 'SET_CREDENTIALS';

export function setLogging() {
  return {
    type: LOGGING,
  };
}

export function setLoggedIn(uid) {
  return {
    type: LOGGED_IN,
    authid: uid,
  };
}


export function setLoginError(error) {
  return {
    type: LOGIN_ERROR,
    error,
  };
}

export function setLogout() {
  window.onunload = undefined;
  localStorage.removeItem('redux1');
  return {
    type: LOGGED_OUT,
  };
}

export function setCredentials(user) {
  return {
    type: SET_CREDENTIALS,
    ...user,
  };
}

export function verifyUser(user) {
  return dispatch => {
    dispatch(setLogging(user));
    return login(user)
      .then((uid) => dispatch(setLoggedIn(uid)))
      .catch((error) => dispatch(setLoginError(error)));
  };
}
