import React from 'react';
import Immutable from 'immutable';
import { Panel } from 'react-bootstrap';
import InboxList from './InboxList';
import { Scrollbars } from 'react-custom-scrollbars';

const title = (
  <h3>Webmail</h3>
);

const Mini = ({ inbox }, context) => {
  const goToWebmail = (toPath) => {
    context.router.push('/webmail');
  };

  return (
    <div className="widget-outer">
      <Panel header={title} >
        <Scrollbars id="chatList" style={{ height: 400 }}>
          <InboxList inbox={inbox} showEmail={goToWebmail} />
        </Scrollbars>
      </Panel>
  </div>
  );
};

Mini.contextTypes = {
  router: React.PropTypes.object.isRequired,
};

Mini.propTypes = {
  inbox: React.PropTypes.object,
  showEmail: React.PropTypes.func,
};

Mini.defaultProps = {
  location: Immutable.fromJS([{
    isFile: false,
    name: 'Intranet',
    path: [],
  }]),
};

export default Mini;
