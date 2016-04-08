import React from 'react';

// import { flexCenter } from '../../Flex';

import ListItem from './ListItem';
// import LocationBar from './LocationBar';
import Toolbar from './Toolbar';
import { Link } from 'react-router';

let style;
import { Scrollbars } from 'react-custom-scrollbars';

export default class Folder extends React.Component {
    static propTypes = {
      location: React.PropTypes.object.isRequired,
      goForward: React.PropTypes.func.isRequired,
      pathString: React.PropTypes.array.isRequired,
      timeStamp: React.PropTypes.string,
      showAttachment: React.PropTypes.func.isRequired,
      goToStringPath: React.PropTypes.func.isRequired,
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
        goForward: this.props.goForward,
        showAttachment: this.showAttachment,
        pathString: this.props.pathString,
      };
      return (<ListItem {...params}/>);
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
            goToStringPath={this.props.goToStringPath}
            timeStamp={this.props.timeStamp}
            folders={this.props.location.count()}
            setSearch={this.props.setSearch}
          />
        );
      return (
          <div style={style.main} id="scroller">
              <Scrollbars style={{ height: window.innerHeight - 50 }}>
                {isDashboard}
                {this.displayStructure(this.props.location)}
              </Scrollbars>
          </div>
      );
    }
}

style = {
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
