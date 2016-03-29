import React from 'react';


const styleContainer= {
  display: 'flex',
  margin: 'auto',
};

export default class Login extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={styleContainer}>
        MyComponent
      </div>
    );
  }
}
