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

export function setLoginError() {
  localStorage.removeItem('user');
  return {
    type: LOGIN_ERROR,
  };
}

export function setLogout() {
  localStorage.removeItem('user');
  return {
    type: LOGGED_OUT,
  };
}

export function setCredentials(user = { id: 'kushan', pass: 'ojo' }) {
  return {
    type: SET_CREDENTIALS,
    ...user,
  };
}

export function verifyUser(user = { id: 'kushan', pass: 'ojo' }) {
  return dispatch => {
    dispatch(setLogging(user));
    return fetch(`http://www.reddit.com/r/science.json`)
      .then(response => response.json())
      .then(json => dispatch(setLoggedIn(user, json)));
  };
}
