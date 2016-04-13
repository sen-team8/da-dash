import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

import Todo from '../Widgets/Todo';
import Intranet from '../Widgets/Intranet';
import Chatroom from '../Widgets/Chatroom';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actions } from '../redux/actions';
// import Waypoint from 'react-waypoint';

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
      <div style={{ background: '#F5FCFF' }}>
      <Grid>
        <Row className="show-grid">
          <Col xs={12} md={6}>
            <div className="dadash-wrapper">
            <Todo />
            </div>
          </Col>
          <Col xs={12} md={6}>
            <div className="dadash-wrapper">
            <Intranet dashboard />
            </div>
          </Col>
          <Col xs={12} md={6}>
            <div style={{ marginTop: '25px' }}>
            <Chatroom />
            </div>
          </Col>
        </Row>
      </Grid>
    </div>
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
