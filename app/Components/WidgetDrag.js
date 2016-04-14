import React, { Component, PropTypes } from 'react';
import { findDOMNode } from 'react-dom';
// import ItemTypes from './ItemTypes';
import { DragSource, DropTarget } from 'react-dnd';
import { ListGroupItem } from 'react-bootstrap';
import { Input } from 'react-bootstrap';

const ItemTypes = {
  CARD: 'widget',
};
const style = {
  padding: '0.5rem 1rem',
  marginBottom: '.5rem',
  backgroundColor: 'white',
  cursor: 'move'
};

const widgetSource = {
  beginDrag(props) {
    return {
      id: props.id,
      index: props.index,
    };
  }
};

const widgetTarget = {
  hover(props, monitor, component) {
    const dragIndex = monitor.getItem().index;
    const hoverIndex = props.index;

    // Don't replace items with themselves
    if (dragIndex === hoverIndex) {
      return;
    }

    // Determine rectangle on screen
    const hoverBoundingRect = findDOMNode(component).getBoundingClientRect();

    // Get vertical middle
    const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

    // Determine mouse position
    const clientOffset = monitor.getClientOffset();

    // Get pixels to the top
    const hoverClientY = clientOffset.y - hoverBoundingRect.top;

    // Only perform the move when the mouse has crossed half of the items height
    // When dragging downwards, only move when the cursor is below 50%
    // When dragging upwards, only move when the cursor is above 50%

    // Dragging downwards
    if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
      return;
    }

    if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
      return;
    }
    props.moveWidget(dragIndex, hoverIndex);

    monitor.getItem().index = hoverIndex;
  },
};

class Widget extends Component {
  static propTypes = {
    connectDragSource: PropTypes.func.isRequired,
    connectDropTarget: PropTypes.func.isRequired,
    index: PropTypes.number.isRequired,
    isDragging: PropTypes.bool.isRequired,
    id: PropTypes.any.isRequired,
    text: PropTypes.string.isRequired,
    moveWidget: PropTypes.func.isRequired,
    display: PropTypes.bool.isRequired,
    change: PropTypes.func.isRequired,
  };

  render() {
    const { text, isDragging, connectDragSource, connectDropTarget, display, index, change } = this.props;
    const opacity = isDragging ? 0 : 1;

    return connectDragSource(connectDropTarget(
        <div style={{ ...style, opacity }}>
            <ListGroupItem>
             <Input type="checkbox" label={text} checked={display} onChange={function foo() {change(index)}} />
            </ListGroupItem>
        </div>

    ));
  }
}

export default DropTarget(ItemTypes.CARD, widgetTarget, connect => ({
  connectDropTarget: connect.dropTarget()
}))(DragSource(ItemTypes.CARD, widgetSource, (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  isDragging: monitor.isDragging()
}))(Widget))
