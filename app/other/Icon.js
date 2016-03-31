
import React, { Component } from 'react';
export default class Icon extends Component {
  constructor(props) {
    super(props);
    this.renderGraphic = this.renderGraphic.bind(this);
  }
  // propTypes: {
  //     icon: React.PropTypes.string.isRequired,
  //     size: React.PropTypes.oneOfType([
  //       React.PropTypes.string,
  //       React.PropTypes.number
  //     ]),
  //     style: React.PropTypes.object
  //   }
getDefaultProps() {
  return {
    size: 24,
  };
}

_mergeStyles(...args) {
    // This is the m function from "CSS in JS" and can be extracted to a mixin
  return Object.assign({}, ...args);
}


  renderGraphic() {
    switch (this.props.icon) {
      case 'my-icon':
        return (
            <g><path d="M7.41 7.84l4.59 4.58 4.59-4.58 1.41 1.41-6 6-6-6z"/></g>
          );
      case 'another-icon':
        return (
            <g><path d="M7.41 15.41l4.59-4.58 4.59 4.58 1.41-1.41-6-6-6 6z"/></g>
          );

      case 'accessibility':
        return (
          <g><path d="M12 2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm9 7h-6v13h-2v-6h-2v6h-2v-13h-6v-2h18v2z"></path></g>
        );
      case 'settings':
        return (
          <g><path d="M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65c-.03-.24-.24-.42-.49-.42h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zm-7.43 2.52c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z"></path></g>
        );
      default:
        return (
          <g><path d="M12 2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm9 7h-6v13h-2v-6h-2v6h-2v-13h-6v-2h18v2z"></path></g>
        );

        // Add more icons here
    }
  }


    render() {
      const styles = {
        fill: 'currentcolor',
        verticalAlign: 'middle',
        width: this.props.size, // CSS instead of the width attr to support non-pixel units
        height: this.props.size, // Prevents scaling issue in IE
      };
      return (
        <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" fit
          style={this._mergeStyles(
            styles,
            this.props.style
          )}
        >
            {this.renderGraphic()}
        </svg>
      );
    }
}
