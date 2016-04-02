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
        {this.props.children}
      </div>
    );
  }
}

export default Home;
