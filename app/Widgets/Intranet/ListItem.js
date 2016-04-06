import React from 'react';
import { ListGroupItem } from 'react-bootstrap';
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
          <div
            key={key}
            className="list-mobile"
            style={style.main}
            onTouchTap={ isFile ?
            this.props.showAttachment.bind(this, this.props.pathString, item)
          : this.props.goForward.bind(this, item)}
          >
            <div style={style.content}>
              {showIcon}
              {item}
            </div>
          </div>
        );
      });
      list.push(<div key={9999} style={{ ...style.main, borderBottom: 'solid 0px' }}/>);
      list.push(<div key={9998} style={{ ...style.main, borderBottom: 'solid 0px' }}/>);
      return <ListGroupItem>{list}</ListGroupItem>;
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