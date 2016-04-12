import React from 'react';
import { Button, Glyphicon, ButtonToolbar, Badge } from 'react-bootstrap';
import Waypoint from 'react-waypoint';
import Chips from './Chips';
import PureRenderMixin from 'react-addons-pure-render-mixin';
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
    goToPath: React.PropTypes.func.isRequired,
    timeStamp: React.PropTypes.string,
    folders: React.PropTypes.number.isRequired,
    setSearch: React.PropTypes.func,
    search: React.PropTypes.object,
    quickSearch: React.PropTypes.object,
  }

  static defaultProps = {
    pathString: [],
  }

  constructor(props, state) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
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
    const { pathString, goToPath, timeStamp, folders } = this.props;

    const lastUpdated = (
      <span>
        Last updated &nbsp;{timeStamp} &nbsp; ago
      </span>
    );

    const canDiscuss = this.props.pathString.length === 3 ?
    (
      <Link to={'discussion/discussions'} >
        <Button key={2} bsSize="small" ><Glyphicon glyph="bullhorn" /> Discussions (23)</Button>
      </Link>
    )
    :
    (
      <span></span>
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
              {
                canDiscuss
              }
          </ButtonToolbar>
        </div>
        <div style={style.updated}>
          {lastUpdated}
        </div>
        <Chips pathString={pathString}
          goToPath= {goToPath}
          setSearch={this.props.setSearch}
          search={this.props.search}
          quickSearch={this.props.quickSearch}
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
