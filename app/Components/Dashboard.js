import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import Todo from '../Widgets/ToDo';

const Nav = ({ toggleSideBar }) => {
  return (
    <Grid>
      <Row>hello world</Row>
      <Row className="show-grid">
        <Col xs={6} md={4}>
          <Todo />
        </Col>
      </Row>
    </Grid>
  );
};

export default Nav;
