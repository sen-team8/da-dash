import Firebase from 'firebase';

export const firebaseRef = new Firebase('https://senteam8.firebaseio.com/');
export let userRef;
function createUser(user) {
  return new Promise((res, rej) => firebaseRef.createUser({
    email: user.id,
    password: user.pass,
  }, (error, userData) => {
    if (error) {
      switch (error.code) {
        case 'EMAIL_TAKEN':
          break;
        case 'INVALID_EMAIL':
          break;
        default:
      }
      return rej(error);
    } else {
      userRef = firebaseRef.child('Users').child(userData.uid);
      return res(userData);
    }
  }));
}


function authenticateUser(user) {
  return new Promise((resolve, reject) => {
    firebaseRef.authWithPassword({
      email: user.id,
      password: user.pass,
    }, (error, authData) => {
      if (error) {
        switch (error.code) {
          case 'INVALID_EMAIL':
            break;
          case 'INVALID_PASSWORD':
            break;
          case 'INVALID_USER':
            break;
          default:
        }
        return reject(error.code);
      } else {
        userRef = firebaseRef.child('Users').child(authData.uid);
        return resolve(user);
      }
    });
  });
}

export default function login(user) {
  const index = user.id.indexOf('@');
  if (index=== -1) {
    user.id = `${user.id}@daiict.ac.in`;
  }

  const promise = Promise.resolve(user);

  return promise.then(authenticateUser)
  .catch((error) => {
    if (error === 'INVALID_USER') {
      createUser(user);
      return Promise.resolve(user);
    } else {
      return Promise.reject(error);
    }
  });
}
