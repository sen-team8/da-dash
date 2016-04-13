import React from 'react';
import { ListGroupItem, ListGroup } from 'react-bootstrap';
import Waypoint from 'react-waypoint';

const style = {
  main: {
    paddingLeft: '15px',
    height: '80px',
  },
  content: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: '10px',
  },
};

export default class ListItem extends React.Component {

  static propTypes = {
    inbox: React.PropTypes.object.isRequired,
    showEmail: React.PropTypes.func.isRequired,
  }

  shouldComponentUpdate(nextProps) {
    return nextProps.inbox !== this.props.inbox;
  }

  render() {
    const inbox = this.props.inbox;
    let list = [];

    list = list.concat(inbox.map((item, key) => {
      const from = item.get('e') && item.get('e').get(item.get('e').count() -1);
      return (
        <ListGroupItem
          key={key}
          style={style.main}
          onClick={function foo() {this.props.showEmail(item.get('id'));}}
        >
          <div style={style.content} className="intranet-item">
            {from.get('p') || from.get('d') || from.get('a')}
            &nbsp;
            { window.innerWidth < 600 && item.get('name').length > 50
              ? `${item.get('name').slice(0, 22)}...${item.get('su').slice(-15)}` : item.get('su') }
              <br />
            {item.get('fr')}
          </div>
        </ListGroupItem>
      );
    }));

    // console.debug('render', new Date().getTime())
    return <ListGroup ref="list" className="intranet-list">{list}</ListGroup>;
  }
}
