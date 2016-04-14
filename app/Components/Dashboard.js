import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Scrollbars } from 'react-custom-scrollbars';

import Todo from '../Widgets/Todo';
import Intranet from '../Widgets/Intranet';
import Chatroom from '../Widgets/Chatroom';
import Webmail from '../Widgets/Webmail';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actions } from '../redux/actions';

import {
  LOGGED_IN,
} from '../redux/loginActions';

class Dashboard extends React.Component {

  static propTypes = {
    login: React.PropTypes.object,
  };

  static contextTypes = {
    router: React.PropTypes.object.isRequired,
  };

  componentDidMount() {
    if (this.props.login.STATUS !== LOGGED_IN) {
      this.context.router.push('/login');
    }
  }

  render() {
    return (
      <Scrollbars style={{ background: '#F5FCFF', height: window.innerHeight - 50 }}>
        <Row>
          <Col xs={12} md={6} lg={6}>
              <Webmail isDashboard />
          </Col>

          <Col xs={12} md={6} lg={6}>
              <Intranet isDashboard />
          </Col>
          <Col xs={12} md={6} lg={6}>
            <div >
              <Chatroom isDashboard />
            </div>
          </Col>
          <Col xs={12} md={6} lg={6}>
              <Todo />
          </Col>
        </Row>
    </Scrollbars>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch),
  };
}

function mapStateToProps(state) {
  return { ...state.reducer };
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
