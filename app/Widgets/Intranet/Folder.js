import React from 'react';

// import { flexCenter } from '../../Flex';

import ListItem from './ListItem';
// import LocationBar from './LocationBar';
import Toolbar from './Toolbar';
import { Link } from 'react-router';

const style = {
  main: {
    // height: '100%',
    // overflowY: 'scroll',
    // overflowX: 'hidden',
    WebkitOverflowScrolling: 'touch',
  },
  list: {
  },
  listItem: {
    paddingTop: '10px',
    paddingBottom: '10px',
  },

  avatarFile: {
    backgroundColor: '#9c27b0',
  },
};

import { Scrollbars } from 'react-custom-scrollbars';

export default class Folder extends React.Component {
  static propTypes = {
    location: React.PropTypes.object.isRequired,
    search: React.PropTypes.object,
    quickSearch: React.PropTypes.object,
    goForward: React.PropTypes.func.isRequired,
    pathString: React.PropTypes.array.isRequired,
    timeStamp: React.PropTypes.string,
    showAttachment: React.PropTypes.func.isRequired,
    goToPath: React.PropTypes.func.isRequired,
    dashboard: React.PropTypes.bool,
    setSearch: React.PropTypes.func,
  }

  showAttachment = (path, file) => {
    let url = path.join('/');
    url = `${url}/${file}`;
    this.props.showAttachment(url);
  }

  displayStructure = (obj) => {
    const params = {
      items: obj,
      goToPath: this.props.goToPath,
      showAttachment: this.showAttachment,
      pathString: this.props.pathString,
    };
    return (<ListItem {...params} />);
  }

  search = () => {
    // console.log(Array.from(this.props.location.keys()).filter(e => e.includes(this.props.search)));
  }
  render() {
    const isDashboard = this.props.dashboard ?
      (
        <Link to={'intranet'} >
          Intranet
        </Link>
      )
      :
      (
        <Toolbar
          pathString={this.props.pathString}
          goToPath={this.props.goToPath}
          timeStamp={this.props.timeStamp}
          folders={this.props.location.count() || 0}
          setSearch={this.props.setSearch}
        />
      );
    return (
        <div style={style.main} >
            <Scrollbars style={{ height: window.innerHeight - 50 }}
              autoHide
              autoHideTimeout={1000}
              autoHideDuration={400}
            >
              <div style={{ overflowX: 'hidden' }}>
                {isDashboard}
                {this.displayStructure(this.props.quickSearch)}
                {this.displayStructure(this.props.search)}
                {this.displayStructure(this.props.location)}
              </div>
            </Scrollbars>
        </div>
    );
  }
}
