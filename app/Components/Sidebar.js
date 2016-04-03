import React, { Component, PropTypes } from 'react';

class Sidebar extends Component {
  static propTypes = {
    sidebarOpen: PropTypes.bool.isRequired,
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
                  <a href="#">Home</a>
              </li>
              <li>
                  <a href="#">About</a>
              </li>
              <li>
                  <a href="#">Events</a>
              </li>
              <li>
                  <a href="#">Team</a>
              </li>
              <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown">Works <span className="caret"></span></a>
                <ul className="dropdown-menu" role="menu">
                  <li className="dropdown-header">Dropdown heading</li>
                  <li><a href="#">Action</a></li>
                  <li><a href="#">Another action</a></li>
                  <li><a href="#">Something else here</a></li>
                  <li><a href="#">Separated link</a></li>
                  <li><a href="#">One more separated link</a></li>
                </ul>
              </li>
              <li>
                  <a href="#">Services</a>
              </li>
              <li>
                  <a href="#">Contact</a>
              </li>
              <li>
                  <a href="https://twitter.com/maridlcrmn">Follow me</a>
              </li>
          </ul>
      </nav>
    );
  }
}

export default Sidebar;
