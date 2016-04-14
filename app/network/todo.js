import { userRef } from './auth';

export function saveTodos(todos) {
  return new Promise((resolve, reject) => {
    userRef.child('todos').set(todos);
    resolve();
  });
}

export function receiveTodos() {
  return new Promise((resolve, reject) => {
    userRef.child('todos').on('value', (snapshot) => {
      // console.log('receive todo ' + snapshot.val());
      resolve(snapshot.val());
    }, (error) => {
      // console.log('errorssssssssss' );
      reject(error.code);
    });
  });
}
