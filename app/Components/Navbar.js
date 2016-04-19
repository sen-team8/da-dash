import React, { Component, PropTypes } from 'react';
import { Navbar, Button } from 'react-bootstrap';
import { Link } from 'react-router';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import Icon from '../helper/Icons';

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
            <Button type="button" onClick={function() {window.location.href="https://sen-team8.gitbooks.io/user-manual/content/"}} style={{ border: 'none',
                                          float: 'right',
                                          marginTop: '4px',
                                          color: '#777',
                                          height: 'auto' }}
            ><Icon size="2.3em" icon="info-outline" /></Button>
        </Navbar.Header>
      </Navbar>
    );
  }
}
