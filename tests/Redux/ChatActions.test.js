/* global define, it, describe */
import { expect } from 'chai';
import * as actions from '../../app/redux/chatActions';

const chatArray = [{
  id: 'First',
  message: 'message',
  time: '01',
},
  {
    id: 'Second',
    message: 'Yolo',
    time: '02',
  },
];


describe('Chat actions', () => {
  it('clearChat should call CLEAR_CHAT action', () => {
    expect(actions.clearChat()).to.deep.equal({
      type: 'CLEAR_CHAT',
    });

    console.log('Expected: ', actions.clearChat());
    console.log('Actual: ', { type: 'CLEAR_CHAT' });
  });

  it('receivedChat should create EDIT_TODO action', () => {
    expect(actions.receivedChat(chatArray)).to.deep.equal({
      type: 'RECEIVED_CHAT',
      chatArray,
    });

    console.log('Expected: chatArray with type: RECEIVED_CHAT is expected');
    console.log('Actual: chatArray with type: RECEIVED_CHAT is received');
  });
});
