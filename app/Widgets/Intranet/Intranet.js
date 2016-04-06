import React from 'react';
// import Appbar from './Appbar';
import Folder from './Folder';
// import SearchResult from './SearchResult';
// import { RefreshIndicator } from 'material-ui';
// import Hot from './Hot';

let style;
export default class Intranet extends React.Component {

    static propTypes = {
      location: React.PropTypes.object,
      goForward: React.PropTypes.func.isRequired,
      pathString: React.PropTypes.array.isRequired,
      timeStamp: React.PropTypes.string,
      showAttachment: React.PropTypes.func.isRequired,
      goToStringPath: React.PropTypes.func.isRequired,
      goBack: React.PropTypes.func.isRequired,
      dashboard: React.PropTypes.bool.isRequired,
    }

    render() {
      return (
        <div style={style.main}>
          <Folder
            location={this.props.location}
            goForward={this.props.goForward}
            pathString={this.props.pathString}
            timeStamp={this.props.timeStamp}
            showAttachment={this.props.showAttachment}
            goToStringPath={this.props.goToStringPath}
            dashboard={this.props.dashboard}
          />
        </div>
      );
    }
}

style = {
  main: {
    height: '100%',
  },
  appbar: {
    minHeight: '166px',
  },
};
