import React from 'react';

export default class SideBars extends React.Component {
  constructor(props) {
    super(props);
    this.styles = this.styles();
  }

  styles() {
    return {
      left: {
        backgroundColor: '#BBBAB6',
        height: '100%',
        width: '8%',
        align: 'left',
        left: '0px',
        top: '0px',
        position: 'fixed',
        zIndex: '-1',
        borderRadius: '5px',
      },
      right: {
        backgroundColor: '#BBBAB6',
        height: '100%',
        width: '8%',
        align: 'right',
        right: '0px',
        top: '0px',
        position: 'fixed',
        zIndex: '-1',
        borderRadius: '5px',
      },
    };
  }

  render() {
    return (
      <div>
        <span style={this.styles.left} />
        <span style={this.styles.right} />
      </div>
    );
  }

}
