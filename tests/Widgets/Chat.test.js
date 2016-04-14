import React from 'react';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
chai.use(chaiEnzyme());
import { mount } from 'enzyme';
import { Chatroom } from '../../app/Widgets/Chatroom';
import sinon from 'sinon';
import { Link } from 'react-router';
import Immutable from 'immutable';
import { traverseIntranet, processLocation } from '../../app/redux/reducer';
import Folder from '../../app/Widgets/Intranet/Folder';
import ListItem from '../../app/Widgets/Intranet/ListItem';
import { actions } from '../../app/redux/actions';

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

const funcToGive = {
  clearChat: sinon.spy(),
  actions: { clearChat: sinon.spy() },
  chats: chatArray,
  ID: '201301',
  receivedChat: sinon.spy(),
  pathString: [],
  params: null,
  discussionid: '',
  isDashboard: true,
};

describe('<Chat />', () => {
  it('It should call clearChat function on mounting.', () => {
    const foo = mount(<Chatroom {...funcToGive} />);
    expect(funcToGive.actions.clearChat.calledOnce).to.equal(true);
  });

  it('It should show the contents on mounting.', () => {
    const foo = mount(<Chatroom {...funcToGive} />);
    expect(foo.find('.bootstrap-border')).to.have.length(1);
  });
});
