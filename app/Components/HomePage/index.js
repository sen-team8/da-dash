import React from 'react';
import DaDash from './DaDash';
import CurrentPage from './CurrentPage';
// import SideBars from './SideBars';

export default class HomePage extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <DaDash />
        <CurrentPage />
      </div>
    );
  }
}
