import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import Icon from '../helper/Icons.js';
import PureRenderMixin from 'react-addons-pure-render-mixin';

class Sidebar extends Component {
  static propTypes = {
    actions: PropTypes.object.isRequired,
    sidebarOpen: PropTypes.bool.isRequired,
    toggleSideBar: PropTypes.func.isRequired,
  }

  constructor(props, state) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  setLogout = () => {
    this.props.actions.setLogout();
  }

  style = () => {
    return {
      nav: this.props.sidebarOpen ?
      'navbar navbar-inverse navbar-fixed-top sidebar-wrapper sidebar-open' :
      'navbar navbar-inverse navbar-fixed-top sidebar-wrapper sidebar-closed',
    };
  }

  render() {
    const style = this.style();
    return (
      <nav
        className={style.nav}
        role="navigation"
      >
          <ul className="nav sidebar-nav">
              <li className="sidebar-brand">
                  <a href="#">
                     Welcome!
                  </a>
              </li>
              <li>
                  <Link to={'/'}
                    onClick={this.props.toggleSideBar}
                  >
                    <Icon size="1.9em" icon="dashboard" style={{ marginRight: '15px' }} />Dashboard
                  </Link>
              </li>
              <li>
                  <Link to={'profile'} onClick={this.props.toggleSideBar}>
                    <Icon size="1.9em" icon="account-circle" style={{ marginRight: '15px' }} />Profile
                  </Link>
              </li>
              <li>
                  <Link to={'widgets'} onClick={this.props.toggleSideBar} >
                    <Icon size="1.9em" icon="mode-edit" style={{ marginRight: '15px' }} />Choose Widgets
                  </Link>
              </li>
              <li>
                  <Link to={'settings'} onClick={this.props.toggleSideBar} >
                    <Icon size="1.9em" icon="settings" style={{ marginRight: '15px' }} />Settings
                  </Link>
              </li>
              <li>
                  <Link to={'help'} onClick={this.props.toggleSideBar} >
                    <Icon size="1.9em" icon="help" style={{ marginRight: '15px' }} />Help
                  </Link>
              </li>
              <li>
                  <a href="#" onClick={this.props.toggleSideBar} >
                    <Icon size="1.9em" icon="bug-report" style={{ marginRight: '15px' }} />Report a Bug
                  </a>
              </li>
              <li>
                  <Link to={'/login'} onClick={this.setLogout} >
                    <Icon size="1.9em" icon="redo" style={{ marginRight: '15px' }} />Logout
                  </Link>
              </li>
          </ul>
      </nav>
    );
  }
}

export default Sidebar;
