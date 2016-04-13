import React from 'react';
import { Panel } from 'react-bootstrap';
// import { flexCenter } from '../../Flex';
import { Scrollbars } from 'react-custom-scrollbars';

import ListItem from './ListItem';
// import LocationBar from './LocationBar';
import Toolbar from './Toolbar';
import { Link } from 'react-router';


export default class Folder extends React.Component {
  static propTypes = {
    location: React.PropTypes.object,
    search: React.PropTypes.object,
    quickSearch: React.PropTypes.object,
    pathString: React.PropTypes.array.isRequired,
    timeStamp: React.PropTypes.string,
    showAttachment: React.PropTypes.func.isRequired,
    goToPath: React.PropTypes.func.isRequired,
    dashboard: React.PropTypes.bool,
    setSearch: React.PropTypes.func,
    isSearching: React.PropTypes.bool.isRequired,
  }

  state = {
    height: window.innerHeight,
  }

  componentDidMount() {
    // document.getElementById('folder').style.overflowX = 'hidden';
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize = (e) => {
    this.setState({ height: window.innerHeight });
  }

  showAttachment = (path) => {
    let url = path.join('/');
    url = `${url}`;
    this.props.showAttachment(url);
  }
  displaySearch = () => {
    const obj1 = this.props.quickSearch;
    const obj2 = this.props.search;
    if (!obj1 && !obj2) return null;

    const searching = (this.props.isSearching) ?
    (<div className="loader">Loading...</div>) :
    (null);

    const params = {
      goToPath: this.props.goToPath,
      showAttachment: this.showAttachment,
      pathString: this.props.pathString,
    };
    return (
      <div>
        <div style={{ position: 'absolute', right: '10px', marginTop: '-30px' }}>{searching}</div>
        <Panel collapsible defaultExpanded bsStyle="success" header={<div><h5>Search</h5></div>}>
          <ListItem fill {...params} items={obj1} />
          <ListItem fill {...params} items={obj2} />
        </Panel>
      </div>
    );
  }

  displayIntranet = () => {
    const obj = this.props.location;
    if (!obj) return null;
    const params = {
      items: obj,
      goToPath: this.props.goToPath,
      showAttachment: this.showAttachment,
      pathString: this.props.pathString,
    };
    return (
        <ListItem fill {...params} />
    );
  }

  displayDashboard = () => {
    return (
      <div className="bootstrap-border intranet container" style={{ width: 'auto', backgroundColor: 'white' }}>
        <div style={{ fontSize: '24px',
            marginBottom: '12px',
            marginTop: '10px',
            borderBottomStyle: 'solid',
            borderColor: '#d3d3d3',
            borderWidth: '2px',
            fontColor: '#009ACD',
            fontStyle: 'bold',
            backgroundColor: 'white' }}
        >
          <Link to={'intranet'} >
            Intranet
          </Link>
        </div>
        {this.displayIntranet()}
      </div>
    );
  }

  search = () => {
    // console.log(Array.from(this.props.location.keys()).filter(e => e.includes(this.props.search)));
  }
  render() {
    this.search = this.props.search || this.props.quickSearch;

    const isDashboard = this.props.dashboard ? this.displayDashboard() :
      (
        <div>
          <Toolbar
            pathString={this.props.pathString}
            goToPath={this.props.goToPath}
            timeStamp={this.props.timeStamp}
            folders={this.props.location.count() || 0}
            setSearch={this.props.setSearch}
            search={this.props.search}
            quickSearch={this.props.quickSearch}
          />
          {this.displaySearch()}
          {this.displayIntranet()}
        </div>
    );
    return (
            <Scrollbars id="folder" style={{ height: this.state.height - 50 }} >
              {isDashboard}
            </Scrollbars>
    );
  }
}
