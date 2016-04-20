import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actions } from '../../redux/actions';
import Inbox from './Inbox';
import MiniWebmail from './MiniWebmail';
import Loading from 'react-loading';
import { Panel } from 'react-bootstrap';

export class WebmailWidget extends React.Component {
  static propTypes = {
    getInbox: React.PropTypes.func.isRequired,
    getEmail: React.PropTypes.func.isRequired,
    user: React.PropTypes.object.isRequired,
    inbox: React.PropTypes.object,
    emailId: React.PropTypes.string,
    email: React.PropTypes.object,
    isFetching: React.PropTypes.bool,
    isFetchingEmail: React.PropTypes.bool,
    isDashboard: React.PropTypes.bool,
    quickSearch: React.PropTypes.object,
    searchForWebmail: React.PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.getInbox(this.props.user);
  }

  setSearch = (s) => {
    this.props.searchForWebmail(s);
  }

  showInbox = () => {
    return this.props.isDashboard ?
        <MiniWebmail inbox={this.props.inbox} showEmail={this.showEmail} /> :
        <Inbox
          inbox={this.props.inbox}
          showEmail={this.showEmail}
          setSearch={this.setSearch}
          quickSearch={this.props.quickSearch}
        />;
  }

  showEmail = () => {
    return null;
  }

  render() {
    return this.props.inbox ? this.showInbox():
    <div className="widget-outer intranet-loading">
      <Panel header={<h3>Webmail</h3>}>
        <div className="widget-inner" style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', justifyContent: 'center', height: '100%', width: '100%' }}>
          <Loading type="bubbles" color="lightblue" />
        </div>
      </Panel>
    </div>;
  }

}

function mapDispatchToProps(dispatch) {
  return { ...bindActionCreators(actions, dispatch) };
}

function mapStateToProps(state) {
  return { user: state.reducer.login, ...state.reducer.webmail };
}

export default connect(mapStateToProps, mapDispatchToProps)(WebmailWidget);
