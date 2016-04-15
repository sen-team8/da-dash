import React from 'react';
import Immutable from 'immutable';
import { Panel } from 'react-bootstrap';
import WriteChat from './WriteChat';
import ChatList from './ChatList';

const Mini = ({ chats, isDashboard, sendChat, ID }) => {
  return (
    <div className="widget-outer">
      <Panel header={'Batch Chat'} >
        <div className="widget-inner">
          <ChatList
            style={{ flex: '8' }}
            chats={chats}
            isDashboard= {isDashboard}
            id= {ID}
          />
          <WriteChat sendChat={sendChat} isDashboard= {isDashboard} />
        </div>
      </Panel>
    </div>
  );
};

Mini.propTypes = {
  chats: React.PropTypes.array,
  isDashboard: React.PropTypes.bool,
  sendChat: React.PropTypes.func,
  ID: React.PropTypes.string,
};


export default Mini;
