import Firebase from 'firebase';

const firebaseRef = new Firebase('https://team8authentication.firebaseio.com/');

function createUser(user) {
  return new Promise((res, rej) => firebaseRef.createUser({
    id: user.id,
    pass: user.pass,
  }, (error, userData) => {
    if (error) {
      switch (error.code) {
        case 'EMAIL_TAKEN':
          console.log('The new user account cannot be created because the email is already in use.');
          break;
        case 'INVALID_EMAIL':
          console.log('The specified email is not a valid email.');
          break;
        default:
          console.log('Error creating user:', error);
      }
      return rej(error);
    } else {
      console.log('Successfully created user account with uid:', userData.uid);
      return res(userData);
    }
  }));
}


function authenticateUser(user) {
  return new Promise((resolve, reject) => {
    firebaseRef.authWithPassword({
      id: user.id,
      pass: user.pass,
    }, (error, authData) => {
      if (error) {
        switch (error.code) {
          case 'INVALID_EMAIL':
            console.log('The specified user account email is invalid.');
            break;
          case 'INVALID_PASSWORD':
            console.log('The specified user account password is incorrect.');
            break;
          case 'INVALID_USER':
            console.log('The specified user account does not exist.');
            break;
          default:
            console.log('Error logging user in:', error);
        }
        reject(user);
      } else {
        console.log('Authenticated successfully with payload:', authData);
        return resolve(user);
      }
    });
  });
}

export default function login(user) {
  console.log('auth: login');
  const promise = Promise.resolve(user);

  return promise.then(authenticateUser)
  .catch(createUser);
}
