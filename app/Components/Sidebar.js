import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

class Sidebar extends Component {
  static propTypes = {
    actions: PropTypes.object.isRequired,
    sidebarOpen: PropTypes.bool.isRequired,
    toggleSideBar: PropTypes.func.isRequired,
  }

  setLogout = () => {
    const users= {
      id: null,
      pass: null,
    };
    this.props.actions.setCredentials(users);
    this.props.actions.setLogout();
  }

  style = () => {
    return {
      nav: {
        width: this.props.sidebarOpen ? '25%' : '0%',
        left: this.props.sidebarOpen ? '75%' : '100%',
      },
    };
  }

  render() {
    const style = this.style();
    return (
      <nav
        style={style.nav}
        className="navbar navbar-inverse navbar-fixed-top sidebar-wrapper"
        role="navigation"
      >
          <ul className="nav sidebar-nav">
              <li className="sidebar-brand">
                  <a href="#">
                     Brand
                  </a>
              </li>
              <li>
                  <Link to={'/'} onClick={this.props.toggleSideBar} >Home</Link>
              </li>
              <li>
                  <Link to={'profile'} onClick={this.props.toggleSideBar} >Profile</Link>
              </li>
              <li>
                  <Link to={'widgets'} onClick={this.props.toggleSideBar} >Choose Widgets</Link>
              </li>
              <li>
                  <Link to={'settings'} onClick={this.props.toggleSideBar} >Settings</Link>
              </li>
              <li>
                  <Link to={'help'} onClick={this.props.toggleSideBar} >Help</Link>
              </li>
              <li>
                  <a href="#" onClick={this.props.toggleSideBar} >Report a bug</a>
              </li>
              <li>
                  <Link to={'/login'} onClick={this.setLogout} >Logout</Link>
              </li>
          </ul>
      </nav>
    );
  }
}

export default Sidebar;
