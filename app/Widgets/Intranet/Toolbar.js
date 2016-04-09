import React from 'react';
import { Button, Glyphicon, ButtonToolbar, Badge } from 'react-bootstrap';
import Waypoint from 'react-waypoint';
import Chips from './Chips';
import { Link } from 'react-router';

function _handleWaypointEnter() {
  // console.log('holsa enterando');
}

function _handleWaypointLeave() {
  // console.log('hola exitando');
}

function isStarred() {

}


export default class Toolbar extends React.Component {
  static propTypes = {
    pathString: React.PropTypes.array.isRequired,
    goToStringPath: React.PropTypes.func.isRequired,
    timeStamp: React.PropTypes.string,
    folders: React.PropTypes.number.isRequired,
    setSearch: React.PropTypes.func,
    onClickDiscussion: React.PropTypes.func,
    onClickFolderPath: React.PropTypes.func,
  }

  getHeading(pathString) {
    if (pathString.length === 0) {
      return 'Intranet';
    } else if (pathString.length === 1 || pathString.length === 2) {
      return pathString[pathString.length - 1];
    } else {
      return pathString[2];
    }
  }

  style = () => {
    return {
      wrapper: {
        height: '200px',
        backgroundColor: '#f5f5f5',
      },
      badge: {
        backgroundColor: '#e7a800',
      },
      updated: {
        display: 'flex',
        justifyContent: 'center',
        color: 'grey',
        fontSize: '0.75em',
      },
      jumbo: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: window.innerWidth < 600 ? '100px' : '140px',
      },
      header: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '12px',
      },
    };
  }


  render() {
    const style = this.style();
    const { pathString, goToStringPath, timeStamp, folders } = this.props;

    const lastUpdated = (
      <span>
        Last updated &nbsp;{timeStamp} &nbsp; ago
      </span>
    );

    return (
      <div style={style.wrapper}>
        <div style={style.jumbo}>
          <div style={style.header}>
            <h1 className="intranet-heading">&nbsp;&nbsp;
              {this.getHeading(pathString)}
              <span>
                <Badge pullRight style={style.badge}>{folders}</Badge>
              </span>
              </h1>&nbsp;
          </div>
          <ButtonToolbar>
            {isStarred()}
            <Button key={0} bsSize="small"><Glyphicon glyph="star" /> Star</Button>
            <Button key={1} bsSize="small" bsStyle="danger"><Glyphicon glyph="fire" /> Trending</Button>
            <Button key={2} bsSize="small" onClick={this.props.onClickDiscussion}><Glyphicon glyph="bullhorn" /> Discussions (23)</Button>
          </ButtonToolbar>
        </div>
        <div style={style.updated}>
          {lastUpdated}
        </div>
        <Chips pathString={pathString}
          goToStringPath= {goToStringPath}
          setSearch={this.props.setSearch}
          onClick={this.props.onClickFolderPath}
        />
        <Waypoint
          onEnter={_handleWaypointEnter}
          onLeave={_handleWaypointLeave}
          threshold={0}
        />
      </div>
    );
  }
}

// style =
