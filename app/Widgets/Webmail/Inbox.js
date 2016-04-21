import React from 'react';
import InboxList from './InboxList';
import { Scrollbars } from 'react-custom-scrollbars';
import Toolbar from './Toolbar';
import Loading from 'react-loading';
import Email from './Email';

export default class Inbox extends React.Component {

  static propTypes = {
    inbox: React.PropTypes.object,
    emailId: React.PropTypes.string,
    email: React.PropTypes.string,
    quickSearch: React.PropTypes.object,
    setSearch: React.PropTypes.func,
    isFetchingEmail: React.PropTypes.bool,
    showEmail: React.PropTypes.func,
    nullTheEmail: React.PropTypes.func,
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

  shouldShowEmail = () => {
    if (this.props.isFetchingEmail) {
      return (
        <div className="widget-inner" style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', justifyContent: 'center', height: '100%', width: '100%' }}>
          <Loading type="bubbles" color="lightblue" />
        </div>
      );
    }
    if (this.props.email) {
      return <Email email={this.props.email} />
    }
    return (
      <InboxList inbox={this.props.inbox} showEmail={this.props.showEmail} quickSearch={this.props.quickSearch} />
    )
  }
  render() {
    return (
      <Scrollbars id="folder" style={{ height: this.state.height - 50 }}>
        <Toolbar
          setSearch={this.props.setSearch}
          quickSearch={this.props.quickSearch}
          count={this.props.inbox.count()}
          nullTheEmail={this.props.nullTheEmail}
          email={this.props.email}
        />
      {this.shouldShowEmail()}
      </Scrollbars>
    );
  }
}
