import login from '../network/auth';

export const LOGGED_IN = 'LOGGED_IN';
export const LOGGING = 'LOGGING';
export const LOGGED_OUT = 'LOGGED_OUT';
export const LOGIN_ERROR = 'LOGIN_ERROR';
export const SET_CREDENTIALS = 'SET_CREDENTIALS';

export function setLogging(user) {
  localStorage.removeItem('user');
  // console.log('user');
  return {
    type: LOGGING,
    ...user,
  };
}

export function setLoggedIn(user, json) {
  return {
    type: LOGGED_IN,
  };
}

export function setLoginError(error) {
  localStorage.removeItem('user');
  return {
    type: LOGIN_ERROR,
    error: '',
  };
}

export function setLogout() {
  localStorage.removeItem('user');
  return {
    type: LOGGED_OUT,
  };
}

export function setCredentials(user) {
  console.log(user);
  return {
    type: SET_CREDENTIALS,
    ...user,
  };
}

export function verifyUser(user) {
  return dispatch => {
    dispatch(setLogging(user));
    return login(user)
      .then(() => dispatch(setLoggedIn()))
      .catch((error) => dispatch(setLoginError(error)));
  };
}
