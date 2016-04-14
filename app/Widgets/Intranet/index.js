import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actions } from '../../redux/actions';
import { formQuery } from '../../network/intranet';
import Folder from './Folder';
import MiniIntranet from './MiniIntranet';

export class IntranetWidget extends React.Component {
  static propTypes = {
    getIntranet: React.PropTypes.func.isRequired,
    goToPath: React.PropTypes.func.isRequired,
    goForward: React.PropTypes.func.isRequired,
    addToFav: React.PropTypes.func.isRequired,
    searchFor: React.PropTypes.func.isRequired,
    location: React.PropTypes.object,
    pathString: React.PropTypes.array,
    timeStamp: React.PropTypes.string,
    fav: React.PropTypes.object,
    dashboard: React.PropTypes.bool,
    search: React.PropTypes.object,
    quickSearch: React.PropTypes.object,
    isSearching: React.PropTypes.bool.isRequired,
    lastFetched: React.PropTypes.number,
  }
  static defaultProps = {
    lastFetched: 0,
  };

  componentDidMount() {
    if (Date.now() - this.props.lastFetched > 60*30000) {
      this.props.getIntranet();
    }
  }

  setSearch = (s) => {
    this.props.searchFor(s);
  }

  showAttachment = (path, file) => {
    window.open(formQuery(path), '_blank');
  }

  render() {
    const progress = (
      <div className="intranet-loading"
        style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%', width: '100%' }}
      >
        <div style={{ alignSelf: 'center' }} >
          Loading...
        </div>
      </div>
    );

    const IntranetDumbRef = this.props.isDashboard ?
      <MiniIntranet location={this.props.fav}
        goToPath={this.props.goToPath}
      />
    : (
      <Folder
        location={this.props.location}
        pathString={this.props.pathString}
        timeStamp={this.props.timeStamp}
        showAttachment={this.showAttachment}
        goToPath={this.props.goToPath}
        dashboard={this.props.dashboard}
        setSearch={this.setSearch}
        search={this.props.search}
        quickSearch={this.props.quickSearch}
        isSearching={this.props.isSearching}
        addToFav={this.props.addToFav}
        fav={this.props.fav}
      />
    );
    return !this.props.location ? progress : IntranetDumbRef;
  }
}

function mapDispatchToProps(dispatch) {
  return { ...bindActionCreators(actions, dispatch) };
}

function mapStateToProps(state) {
  return { user: state.reducer.login, ...state.reducer.intranet };
}

export default connect(mapStateToProps, mapDispatchToProps)(IntranetWidget);
