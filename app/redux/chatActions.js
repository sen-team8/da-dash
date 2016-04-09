import { pushChat } from '../network/chat';

export const CLEAR_CHAT= 'CLEAR_CHAT';
export const RECEIVED_CHAT = 'RECEIVED_CHAT';

export function clearChat() {
  return {
    type: CLEAR_CHAT,
  };
}


export function sendChat(chat, group) {
  return dispatch => {
    return pushChat(chat, group).catch((error) => {
      // do something
    });
  };
}

export function receivedChat(chatArray) {
  return {
    type: RECEIVED_CHAT,
    chatArray,
  };
}
