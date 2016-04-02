import React from 'react';
import { Navbar } from 'react-bootstrap';

const Nav = ({ toggleSideBar }) => {
  return (
    <Navbar fluid onToggle={toggleSideBar}>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="#">Da-Dash</a>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
    </Navbar>
  );
};

export default Nav;
