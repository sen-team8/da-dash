export const LOGGED_IN = 'LOGGED_IN';
export const LOGGING = 'LOGGING';
export const LOGGED_OUT = 'LOGGED_OUT';
export const LOGIN_ERROR = 'LOGIN_ERROR';

export function setLogging(user) {
  localStorage.removeItem('user');
  return {
    type: LOGGING,
    ...user,
  };
}

export function setLoggedIn() {
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
