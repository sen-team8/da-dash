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
      case 'now-widgets':
        return (
          <g><path d="M13 13v8h8v-8h-8zm-10 8h8v-8h-8v8zm0-18v8h8v-8h-8zm13.66-1.31l-5.66 5.65 5.66 5.66 5.66-5.66-5.66-5.65z"></path></g>
        );
      case 'person':
        return (
          <g><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path></g>
        );
      case 'undo':
        return (
          <g><path d="M12.5 8c-2.65 0-5.05.99-6.9 2.6l-3.6-3.6v9h9l-3.62-3.62c1.39-1.16 3.16-1.88 5.12-1.88 3.54 0 6.55 2.31 7.6 5.5l2.37-.78c-1.39-4.19-5.32-7.22-9.97-7.22z"></path></g>
        );
      case 'bug-report':
        return (
          <g><path d="M20 8h-2.81c-.45-.78-1.07-1.45-1.82-1.96l1.63-1.63-1.41-1.41-2.17 2.17c-.46-.11-.93-.17-1.42-.17-.49 0-.96.06-1.41.17l-2.18-2.17-1.41 1.41 1.62 1.63c-.74.51-1.36 1.18-1.81 1.96h-2.81v2h2.09c-.05.33-.09.66-.09 1v1h-2v2h2v1c0 .34.04.67.09 1h-2.09v2h2.81c1.04 1.79 2.97 3 5.19 3s4.15-1.21 5.19-3h2.81v-2h-2.09c.05-.33.09-.66.09-1v-1h2v-2h-2v-1c0-.34-.04-.67-.09-1h2.09v-2zm-6 8h-4v-2h4v2zm0-4h-4v-2h4v2z"></path></g>
        );
      case 'error':
        return (
            <g><path d="M12 2c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10-4.48-10-10-10zm1 15h-2v-2h2v2zm0-4h-2v-6h2v6z"></path></g>
          );
      case 'account-circle':
        return (
              <g><path d="M12 2c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10-4.48-10-10-10zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"></path></g>
            );

      case 'search':
        return (
            <g><path d="M15.5 14h-.79l-.28-.27c.98-1.14 1.57-2.62 1.57-4.23 0-3.59-2.91-6.5-6.5-6.5s-6.5 2.91-6.5 6.5 2.91 6.5 6.5 6.5c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99 1.49-1.49-4.99-5zm-6 0c-2.49 0-4.5-2.01-4.5-4.5s2.01-4.5 4.5-4.5 4.5 2.01 4.5 4.5-2.01 4.5-4.5 4.5z"></path></g>
          );

      case 'help':
        return (
          <g><path d="M12 2c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10-4.48-10-10-10zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92c-.72.73-1.17 1.33-1.17 2.83h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2h-2c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"></path></g>
        );

      case 'accessibility':
        return (
          <g><path d="M12 2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm9 7h-6v13h-2v-6h-2v6h-2v-13h-6v-2h18v2z"></path></g>
        );

      case 'dashboard':
        return (
            <g><path d="M3 13h8v-10h-8v10zm0 8h8v-6h-8v6zm10 0h8v-10h-8v10zm0-18v6h8v-6h-8z"></path></g>
          );

      case 'home':
        return (
            <g><path d="M10 20v-6h4v6h5v-8h3l-10-9-10 9h3v8z"></path></g>
          );

      case 'menu':
        return (
            <g><path d="M3 18h18v-2h-18v2zm0-5h18v-2h-18v2zm0-7v2h18v-2h-18z"></path></g>
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
