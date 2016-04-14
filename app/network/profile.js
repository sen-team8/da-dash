import { userRef } from './auth';

// const userRef = firebaseRef.child('Users').child(authId);

export function setName(id, name) {
  // console.log('setname '+ id + '   ' + name);
  return new Promise((resolve, reject) => {
    userRef.child(id).set({ name });
    resolve(id);
  });
}

export function requestName(id) {
  // console.log('requestName '+ id);
  return new Promise((resolve, reject) => {
    userRef.child(id).child('name').on('value', (snapshot) => {
      // console.log('snapshot' + snapshot.val());
      resolve(snapshot.val());
    }, (error) => {
      reject(error.code);
    });
  });
}
