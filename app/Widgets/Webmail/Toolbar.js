import React from 'react';
import { Button, Glyphicon, ButtonToolbar, Badge } from 'react-bootstrap';
import Chips from './Chips';
import PureRenderMixin from 'react-addons-pure-render-mixin';
// import { Link } from 'react-router';
import Waypoint from 'react-waypoint';

export default class Toolbar extends React.Component {
  static propTypes = {
    count: React.PropTypes.number.isRequired,
    setSearch: React.PropTypes.func,
    quickSearch: React.PropTypes.object,
    nullTheEmail: React.PropTypes.func,
    email: React.PropTypes.object,
  }

  constructor(props, state) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  state = {
    showFixed: false,
  }

  _handleWaypointLeave = () => {
    this.setState({
      showFixed: true,
    });
  }
  _handleWaypointEnter = () => {
    this.setState({
      showFixed: false,
    });
  }

  style = () => {
    return {
      wrapper: {
        height: '152px',
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
    const { count } = this.props;

    return (
      <div style={style.wrapper}>
        <div style={style.jumbo}>
          <div style={style.header}>
            <h1 className="intranet-heading" style={{ textAlign: 'center' }}>&nbsp;&nbsp;
              {(this.props.email && this.props.email.subject) || 'Inbox'}
              {
                !(this.props.email && this.props.email.subject) ? (
                  <span>
                    <Badge pullRight style={style.badge}>{count}</Badge>
                  </span>
                ) : null
              }

              </h1>&nbsp;
          </div>
          {/*
          <ButtonToolbar>
            <Button key={0} bsSize="small"><Glyphicon glyph="star" /> Star</Button>
            <Button key={1} bsSize="small" bsStyle="danger"><Glyphicon glyph="fire" /> Trending</Button>
          </ButtonToolbar>*/}
        </div>
        <Waypoint
          onEnter={this._handleWaypointEnter}
          onLeave={this._handleWaypointLeave}
        />
        <Chips
          setSearch={this.props.setSearch}
          showFixed={this.state.showFixed}
          quickSearch={this.props.quickSearch}
          nullTheEmail={this.props.nullTheEmail}
        />
    </div>
    );
  }
}

// style =
