import { firebaseRef } from './auth';

const month= ['Jan', 'Feb', 'Mar', 'April', 'May', 'June', 'July', 'Aug', 'Sept', 'Nov', 'Dec'];

function getChat() {
  return new Promise((resolve, reject) => {
    firebaseRef.on('value', (snapshot) => {
      return resolve(snapshot.val());
    }, (errorObject) => {
      return reject(errorObject.code);
    });
  });
}

function send(v) {
  return new Promise((resolve, reject) => {
    const d = new Date();
    const c = v.c;
    const b = v.b;
    const batch = c.id.substring(0, 6);
    let ref;
    if (b=== 1) {
      ref = firebaseRef.child('DAIICT');
    } else {
      ref = firebaseRef.child(batch);
    }
    c.time = `${month[d.getMonth()]} ${d.getDate()} ${d.getFullYear()} ${d.getHours()}:${d.getMinutes()}`;
    ref.push(c);
  });
}


export function pushChat(c, b) {
  const promise = Promise.resolve({ c, b });
  return promise.then(send);
}

export function chat(type) {
  const promise = Promise.resolve();
  return promise.then(getChat);
}
