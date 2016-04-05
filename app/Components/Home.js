import React from 'react';
import Nav from './Navbar';
import Sidebar from './Sidebar';


class Home extends React.Component {

  static propTypes = {
    children: React.PropTypes.object.isRequired,
  }

  state = {
    sidebarOpen: false,
  }

  // onSetSidebarOpen = (open) => {
  //   this.setState({ sidebarOpen: open });
  // }

  toggleSideBar = () => {
    // toggles sidebar
    this.setState({ sidebarOpen: !this.state.sidebarOpen });
  }

  style = () => {
    return {
      overlay: {
        opacity: this.state.sidebarOpen ? '0.4' : '0',
        zIndex: this.state.sidebarOpen ? '500' : '0',
        pointerEvents: this.state.sidebarOpen ? 'all' : 'none',
      },
    };
  }

  render() {
    const style = this.style();
    return (
      <div className="wrapper0">
        <div className="side-content">
          <Nav toggleSideBar={this.toggleSideBar} sidebarOpen={this.state.sidebarOpen} />
          <div style={{ marginTop: '60px' }}>
            {this.props.children}
          </div>
        </div>
        <div className="overlay" style={style.overlay} onClick={this.toggleSideBar}/>
        <Sidebar sidebarOpen={this.state.sidebarOpen} />
      </div>
    );
  }
}

export default Home;
