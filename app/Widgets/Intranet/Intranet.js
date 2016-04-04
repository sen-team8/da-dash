import React from 'react';
// import Appbar from './Appbar';
import Folder from './Folder';
// import SearchResult from './SearchResult';
// import { RefreshIndicator } from 'material-ui';
// import Hot from './Hot';

let style;
export default class Intranet extends React.Component {

    static propTypes = {
      user: React.PropTypes.object.isRequired,
      location: React.PropTypes.object,
      goForward: React.PropTypes.func.isRequired,
      path: React.PropTypes.array.isRequired,
      pathString: React.PropTypes.array.isRequired,
      timeStamp: React.PropTypes.string,
      searching: React.PropTypes.bool.isRequired,
      showAttachment: React.PropTypes.func.isRequired,
      hot: React.PropTypes.bool.isRequired,
      goToStringPath: React.PropTypes.func.isRequired,
      search: React.PropTypes.bool.isRequired,
      searchResult: React.PropTypes.bool.isRequired,
      goBack: React.PropTypes.func.isRequired,
      home: React.PropTypes.bool.isRequired,
      handleTabChange: React.PropTypes.func.isRequired,
      setSearch: React.PropTypes.func.isRequired,

    }

    render() {
      // const folder = (
      //   <Folder
      //     tree={this.props.tree}
      //     location={this.props.location}
      //     goForward={this.props.goForward}
      //     path={this.props.path}
      //     pathString={this.props.pathString}
      //     timeStamp={this.props.timeStamp}
      //     searching={this.props.searching}
      //     showAttachment={this.props.showAttachment}
      //   />
      // );
      // let whatToshow = folder;
      // if (this.props.hot) {
      //   whatToshow = (
      //     <Hot
      //       user={this.props.user}
      //       goToStringPath={this.props.goToStringPath}
      //       showAttachment={this.props.showAttachment}
      //     />
      //   );
      // } else if (this.props.search && this.props.searching) {
      //   whatToshow = (
      //     <RefreshIndicator size={40} left={5} top={5}
      //       style={{ marginTop: '10px', position: 'relative', alignSelf: 'center' }} status="loading"
      //     />
      //   );
      // } else if (this.props.search) {
      //   whatToshow = (
      //     <SearchResult
      //       searchResult={this.props.searchResult}
      //       goToStringPath={this.props.goToStringPath}
      //       showAttachment={this.props.showAttachment}
      //     />
      //   );
      // }
      return (
        <div style={style.main}>
          <Folder
            location={this.props.location}
            goForward={this.props.goForward}
            path={this.props.path}
            pathString={this.props.pathString}
            timeStamp={this.props.timeStamp}
            searching={this.props.searching}
            showAttachment={this.props.showAttachment}
            goToStringPath={this.props.goToStringPath}
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
