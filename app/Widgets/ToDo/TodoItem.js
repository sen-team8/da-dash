import React from 'react';

const styleP = {
  marginLeft: '10px',
};
const styleD = {
  backgroundColor:'grey',
  marginTop:'1px',
  paddingTop: '4px',
  paddingBottom: '4px',
}

class TodoItem extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div style={styleD}><p style={styleP}>{this.props.todo.text}</p></div>
    );
  }
}

export default TodoItem;
