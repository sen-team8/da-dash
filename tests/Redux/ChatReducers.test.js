import { expect } from 'chai';
import { chat } from '../../app/redux/reducer';

const initialState = {
  chats: [{
    id: 'First',
    message: 'message',
    time: '01',
  },
  ],
};

const actions = {
  chatArray: [{
    id: 'First',
    message: 'message',
    time: '01',
  },
    {
      id: 'Second',
      message: 'Yolo',
      time: '02',
    },
  ],
};

describe('Chat reducers tests', () => {
  it('Recieved Chat reducer should change chatState appropriately.', () => {
    actions.type = 'RECEIVED_CHAT';
    expect(chat(initialState, actions)).to.deep.equal({ chats: actions.chatArray });

    console.log('Expected: ', chat(initialState, actions));
    console.log('Actual: ', { chats: actions.chatArray });
  });
  it('Clear Chat reducer should change chatState appropriately.', () => {
    actions.type = 'CLEAR_CHAT';
    expect(chat(initialState, actions)).to.deep.equal({ chats: [] });
    console.log('Expected: ', "chatArray : null");
    console.log('Actual: ', "chatArray : null");
  });

  it('Buggy input reducer should return chatState unchanged.', () => {
    actions.type = null;
    expect(chat(initialState, actions)).to.deep.equal(initialState);
    console.log('Expected: ', "Initial state of chat is expected");
    console.log('Actual: ', "Initial state of chat is received");
  });
});
