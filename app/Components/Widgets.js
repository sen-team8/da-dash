import React, { Component } from 'react';
import update from 'react/lib/update';
import { DragDropContext as dragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import Widget from './WidgetDrag';
import { ListGroup } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actions } from '../redux/actions';
import { Grid, Row, Col } from 'react-bootstrap';

const style = {
  width: 400,
};

class Container extends Component {

  static propTypes = {
    actions: React.PropTypes.object.isRequired,
    widgets: React.PropTypes.array,
  }
  moveWidget = (dragIndex, hoverIndex) => {
    const widgets = this.props.widgets.slice(0);
    const dragWidget = widgets[dragIndex];

    const newArray = widgets.filter((i, k) => {
      return k !== dragIndex;
    });
    this.props.actions.addToWidgets(
      newArray.slice(0, hoverIndex).concat([dragWidget]).concat(newArray.slice(hoverIndex))
    );
  }

  change = (id) => {
    const widgets = this.props.widgets.slice(0);
    widgets[id].display = !widgets[id].display;
    this.props.actions.addToWidgets(widgets);
  }

  render() {
    const { widgets } = this.props;
    return (
      <Grid>
      <Row>
      <Col offset={6}>
        <ListGroup style={style}>
          {widgets.map((widget, i) => {
            return (
              <Widget key={widget.id}
                index={i}
                id={widget.id}
                text={widget.text}
                moveWidget={this.moveWidget}
                display={widget.display}
                change={this.change}
              />
            );
          })}
        </ListGroup>
      </Col>
      </Row>
      </Grid>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch),
  };
}

function mapStateToProps(state) {
  return { ...state.reducer.dashboard };
}

export default connect(mapStateToProps, mapDispatchToProps)(dragDropContext(HTML5Backend)(Container));
