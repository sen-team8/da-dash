import React from 'react';
import { Row, Col, Grid } from 'react-bootstrap';
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

const widgets = {
  Intranet: <Intranet isDashboard />,
  Chat: <Chatroom isDashboard />,
  Webmail: <Webmail isDashboard />,
  Todo: <Todo isDashboard />,
};

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
  iterateThrough() {
    const selectedWidgets = [];
    const p = this.props.dashboard.widgets.forEach((e, k) => {
      if (widgets[e.text] && e.display) {
          selectedWidgets.push(
            <Col xs={12} md={5} lg={5}>
              {widgets[e.text]}
            </Col>
          );
      }
    });
    return selectedWidgets;
  }
  render() {
    const cols = this.iterateThrough();
    return (
      <Scrollbars style={{ background: '#F5FCFF', height: window.innerHeight - 50 }}>
        <Grid>
          <Row>
            {cols.shift()}
            {cols.shift()}
          </Row>
          <Row>
            {cols.shift()}
            {cols.shift()}
          </Row>
          <Row>
            {cols.shift()}
          </Row>
        </Grid>
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
