import React from 'react';
import { ListGroupItem, ListGroup } from 'react-bootstrap';
// import Waypoint from 'react-waypoint';

const style = {
  main: {
    paddingLeft: '15px',
    height: '120px',
  },
  content: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'space-between',
    padding: '5px',
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
    const { inbox, showEmail } = this.props;
    let list = [];
    list = list.concat(inbox.map((item, key) => {
      const from = item.get('e') && item.get('e').get(item.get('e').count() -1);
      return (
        <ListGroupItem
          key={key}
          style={style.main}
          onClick={function foo() {showEmail(item.get('id'));}}
        >
          <div style={style.content} className="intranet-item">
            <p style={{ fontWeight: 'bold', minWidth: '150px' }}>{from.get('p') || from.get('d') || from.get('a')}</p>
            &nbsp;
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'space-between' }}>
              <p>{ window.innerWidth < 600 && item.get('su').length > 50
                ? `${item.get('su').slice(0, 22)}...${item.get('su').slice(-15)}` : item.get('su') }</p>
              <div style={{ minHeight: '200px' }}>{item.get('fr')}</div>
            </div>
          </div>
        </ListGroupItem>
      );
    }));

    // console.debug('render', new Date().getTime())
    return <ListGroup ref="list" className="intranet-list">{list}</ListGroup>;
  }
}
