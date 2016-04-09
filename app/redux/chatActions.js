import { pushChat } from '../network/chat';
import { firebaseRef } from '../network/auth';

// export const ADD_CHAT= 'CHAT';
export const UPDATE_CHAT= 'UPDATE_CHAT';
export const CLEAR_CHAT= 'CLEAR_CHAT';

let ref = firebaseRef;

function updateChat(c) {
  const userC = { id: c.id, message: c.message, time: c.time };
  return {
    type: UPDATE_CHAT,
    chat: userC,
  };
}

export function clearChat() {
  ref.off();
  return {
    type: CLEAR_CHAT,
  };
}

export function getUpdatedChat(id, b) {
  const batch = id.substring(0, 6);
  if (b === 1) {
    ref = firebaseRef.child('DAIICT');
  } else {
    ref= firebaseRef.child(batch);
  }
  return dispatch => ref.on('child_added', (snapshot) => {
    dispatch(updateChat(snapshot.val()));
  });
}

export function sendChat(userChat, b) {
  return dispatch => {
    return pushChat(userChat, b).catch((error) => {
      // do something
    });
  };
}
