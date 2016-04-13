import React, { Component, PropTypes } from 'react';
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router';
import PureRenderMixin from 'react-addons-pure-render-mixin';

export default class Nav extends Component {

  static propTypes = {
    toggleSideBar: PropTypes.func.isRequired,
    sidebarOpen: PropTypes.bool.isRequired,
  }
  constructor(props, state) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }
  style = () => {
    return {
      navbar: this.props.sidebarOpen ?
      'side-content navbar-open' :
      'side-content navbar-closed',
    };
  }

  render() {
    const style = this.style();
    return (
      <Navbar fixedTop className={style.navbar} fluid onToggle={this.props.toggleSideBar}>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to={'/'} style={{ fontSize: '28px', marginLeft: '5px' }}>Da-Dash</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
      </Navbar>
    );
  }
}
