import React from 'react';
import Nav from './Navbar';

class Home extends React.Component {
  static propTypes = {
    children: React.PropTypes.object.isRequired,
  }
  state = {
    sidebarOpen: true,
  }

  onSetSidebarOpen = (open) => {
    this.setState({ sidebarOpen: open });
  }

  toggleSideBar = () => {
    // toggles sidebar
    this.setState({ sidebarOpen: !this.state.sidebarOpen });
  }

  render() {
    return (
      <div>
        <Nav toggleSideBar={this.toggleSideBar}/>
        <div style={{ marginTop: '60px' }}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Home;
