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

    shouldComponentUpdate(nextProps) {
      // console.log(nextProps.items !== this.props.items);
      return nextProps.items !== this.props.items;
    }
    getIcon(isFile) {
      if (isFile) {
        return <Icon icon="pdf" style={{ fill: '#ff8a65' }}/>;
      }
      return <Icon icon="folder" style={{ fill: '#ffcc80' }}/>;
    }

    render() {
      const obj = this.props.items;
      const props = this.props;
      const grid = Array.from(obj.keys()).sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0));
      const list = grid.map((item, key) => {
        const isFile = obj.get(item) === 'file';
        return (
          <ListGroupItem
            key={key}
            style={style.main}
            className="intranet-list"
            onTouchTap={ isFile ?
              function foo() {props.showAttachment(props.pathString, item);}
            : function foo() {props.goForward(item);}
            }
          >
            <div style={style.content} >
              {this.getIcon(isFile)}
              &nbsp;{ window.innerWidth < 600 && item.length > 50 ? `${item.slice(0, 22)}...${item.slice(-15)}` : item }
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
