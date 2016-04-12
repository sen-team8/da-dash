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
  });

  it('receivedChat should create EDIT_TODO action', () => {
    expect(actions.receivedChat(chatArray)).to.deep.equal({
      type: 'RECEIVED_CHAT',
      chatArray,
    });
  });
});
