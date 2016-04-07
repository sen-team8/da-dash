import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

import Todo from '../Widgets/Todo';
import Intranet from '../Widgets/Intranet';
import Chatroom from '../Widgets/Chatroom';

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
      <Grid>
        <Row>hello world</Row>
        <Row className="show-grid">
          <Col xs={12} md={6}>
            <Todo />
          </Col>
          <Col xs={12} md={6}>
            <Intranet dashboard/>
          </Col>
          <Col xs={12} md={6}>
            <Chatroom />
          </Col>
        </Row>
      </Grid>
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
