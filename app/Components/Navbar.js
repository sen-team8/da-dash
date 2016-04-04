import React from 'react';
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router';

const Nav = ({ toggleSideBar }) => {
  return (
    <Navbar fixedTop onToggle={toggleSideBar}>
      <Navbar.Header>
        <Navbar.Brand>
          <Link to={'/'}>Da-Dash</Link>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
    </Navbar>
  );
};

export default Nav;
