import React from 'react';

export default class LocationBar extends React.Component {
  propTypes = {
    goToStringPath: React.PropTypes.func.isRequired,
    pathString: React.PropTypes.array,
  };

  handleClick = (key) => {
    return this.props.goToStringPath(this.props.pathString.slice(0, key+1).join('/'));
  }
  render() {
    const handleClick = this.handleClick;
    const locations = this.props.pathString.map((loc, key) => {
      return <span key={key} onTouchTap={function tap() {handleClick(key);}}> {loc} /</span>;
    });
    return (
      <div style={{ fontSize: '16px', cursor: 'pointer' }}>
        {locations}
      </div>
    );
  }
}
