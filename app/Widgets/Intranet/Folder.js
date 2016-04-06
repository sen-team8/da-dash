import React from 'react';
import { ListGroup } from 'react-bootstrap';

// import { flexCenter } from '../../Flex';

import ListItem from './ListItem';
// import LocationBar from './LocationBar';

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
    render() {
      const lastUpdated = (
        <span>
          Last updated &nbsp;{this.props.timeStamp} &nbsp; ago
        </span>
      );
      const statusDisplay = lastUpdated;
      return (
          <div style={style.main} id="scroller">
            <div style={style.updated}>
              {statusDisplay}
            </div>
              <Scrollbars style={{ height: window.innerHeight - 120 }}>
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
  updated: {
    display: 'flex',
    justifyContent: 'center',
    color: 'grey',
    fontSize: '0.75em',
    marginTop: '5px',
  },
  avatarFile: {
    backgroundColor: '#9c27b0',
  },
};
