import React from 'react';
import InboxList from './InboxList';
import { Scrollbars } from 'react-custom-scrollbars';
import Toolbar from './Toolbar';

export default class Inbox extends React.Component {

  static propTypes = {
    inbox: React.PropTypes.object,
    emailId: React.PropTypes.string,
    email: React.PropTypes.object,
  };

  state = {
    height: window.innerHeight,
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize = (e) => {
    this.setState({ height: window.innerHeight });
  }

  render() {
    return (
      <Scrollbars id="folder" style={{ height: this.state.height - 50 }}>
        <Toolbar count={this.props.inbox.count()} />
        <InboxList inbox={this.props.inbox} showEmail={this.showEmail} />
      </Scrollbars>
    );
  }
}
