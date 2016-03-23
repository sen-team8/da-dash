import React, { Component } from 'react';
import ToDo from './Widgets/ToDo';

export default class Bapp extends Component {
  foo() {
    return 'good';
  }
  render() {
    return (
      <div className="commentBox">
          Hello,wosld! I am a CommentBox.
          <ToDo/>
      </div>
    );
  }
}
