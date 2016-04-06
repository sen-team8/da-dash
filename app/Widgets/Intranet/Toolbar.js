import React from 'react';
import { Breadcrumb, BreadcrumbItem, Button, Glyphicon, ButtonToolbar, Badge } from 'react-bootstrap';
import Icon from '../../helper/Icons';
import Waypoint from 'react-waypoint';

let style;

const handleClick = (key, pathString, goToStringPath) => {
  return goToStringPath(pathString.slice(0, key+1));
};

function _handleWaypointEnter() {
  // console.log('holsa enterando');
}

function _handleWaypointLeave() {
  // console.log('hola exitando');
}

export default ({ pathString, goToStringPath, timeStamp, folders }) => {
  const home = (
    <BreadcrumbItem onClick={function foo() {goToStringPath([]);}}>
      <Icon icon="home" style={{ fill: '#000' }}/>
    </BreadcrumbItem>
  );

  const lastUpdated = (
    <span>
      Last updated &nbsp;{timeStamp} &nbsp; ago
    </span>
  );

  const List = pathString.map((e, k) => {
    return (
      <BreadcrumbItem
        onClick={function foo() {handleClick(k, pathString, goToStringPath);}}
      >
        {e}
      </BreadcrumbItem>
    );
  });

  return (
    <div style={style.wrapper}>
      <div style={style.jumbo}>
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
          <h1>&nbsp;&nbsp;{pathString[pathString.length - 1] || 'Intranet'}</h1>&nbsp;
          <Badge pullRight style={style.badge}>{folders}</Badge>
        </div>
        <ButtonToolbar>
          <Button bsSize="small"><Glyphicon glyph="star" /> Star</Button>
          <Button bsSize="small" bsStyle="danger"><Glyphicon glyph="fire" /> Trending</Button>
          <Button bsSize="small"><Glyphicon glyph="bullhorn" /> Discussions (23)</Button>
        </ButtonToolbar>
      </div>
      <div style={style.updated}>
        {lastUpdated}
      </div>

      <Breadcrumb>
        {[home].concat(List)}
      </Breadcrumb>
      <Waypoint
        onEnter={_handleWaypointEnter}
        onLeave={_handleWaypointLeave}
        threshold={0}
      />
    </div>
  );
};

style = {
  wrapper: {
    height: '150px',
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
  },
};
