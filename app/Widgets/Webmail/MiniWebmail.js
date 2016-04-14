import React from 'react';
import Immutable from 'immutable';
import { Panel } from 'react-bootstrap';
import InboxList from './InboxList';
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
        <div className="widget-inner">
          <InboxList inbox={inbox} showEmail={goToWebmail} />
        </div>
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
