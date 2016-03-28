import React, { Component } from 'react';
export default class Bapp extends Component {
  foo() {
    return 'good';
  }

 /**
  * This function re-renders the components whenever it's state changes.
  */
  render() {
    return (
      <div className="commentBox">
          Hello,wosssld! I am a CommentBox.
      </div>
    );
  }
}
