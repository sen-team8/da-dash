import React from 'react';
import { ListGroupItem, ListGroup } from 'react-bootstrap';
import Icon from '../../helper/Icons';

let style;

export default class ListItem extends React.Component {

    static propTypes = {
      items: React.PropTypes.object.isRequired,
      goForward: React.PropTypes.func.isRequired,
      showAttachment: React.PropTypes.func.isRequired,
      pathString: React.PropTypes.array.isRequired,
    }

    render() {
      const obj = this.props.items;
      const props = this.props;
      const grid = Array.from(obj.keys()).sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0));
      const list = grid.map((item, key) => {
        const isFile = obj.get(item) === 'file';
        let showIcon;
        if (this.props.pathString.length > 1) {
          showIcon = (<div style={style.icon}>{isFile ?
              <Icon icon="pdf" style={{ fill: '#ff8a65' }}/> :
              <Icon icon="folder" style={{ fill: '#ffcc80' }}/>}</div>);
        } else {
          showIcon = null;
        }
        return (
          <ListGroupItem
            key={key}
            style={style.main}
            onTouchTap={ isFile ?
              function foo() {props.showAttachment(props.pathString, item);}
            : function foo() {props.goForward(item);}
            }
          >
            <div style={style.content}>
              {showIcon}
              {item}
            </div>
          </ListGroupItem>
        );
      });
      return <ListGroup>{list}</ListGroup>;
    }
}

style = {
  main: {
    paddingLeft: '30px',
    height: '68px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    borderBottom: 'solid 1px #e0e0e0',
  },
  content: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: '7px',
  },
};
