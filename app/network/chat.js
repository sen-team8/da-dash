import { firebaseRef } from './auth';

function send(v) {
  return new Promise((resolve, reject) => {
    const c = v.c;
    const group = v.group;
    const ref = firebaseRef.child(group);
    ref.push(c);
  });
}

export function pushChat(c, group) {
  const promise = Promise.resolve({ c, group });
  return promise.then(send);
}
