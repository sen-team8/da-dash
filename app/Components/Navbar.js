import React, { Component, PropTypes } from 'react';
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router';
import Icon from '../helper/Icons.js';
export default class Nav extends Component {

  static propTypes = {
    toggleSideBar: PropTypes.func.isRequired,
    sidebarOpen: PropTypes.bool.isRequired,
  }

  style = () => {
    return {
      navbar: {
        maxWidth: this.props.sidebarOpen ? '80%' : '100%',
        backgroundColor: 'white',
      },
    };
  }

  render() {
    const style = this.style();
    return (
      <Navbar fixedTop className="side-content" style={style.navbar} fluid onToggle={this.props.toggleSideBar}>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to={'/'} style={{ fontSize: '28px', marginLeft: '5px', marginBottom: '10px' }}>
              <Icon size="1.3em" icon="dashboard" style={{ marginBottom: '10px' }}/>Da-Dash</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
      </Navbar>
    );
  }
}
