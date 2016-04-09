import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actions } from '../../redux/actions';
import { formQuery } from '../../network/intranet';
import Folder from './Folder';
import Immutable from 'immutable';
class IntranetWidget extends React.Component {
    static propTypes = {
      getIntranet: React.PropTypes.func.isRequired,
      goToPath: React.PropTypes.func.isRequired,
      goForward: React.PropTypes.func.isRequired,
      addToFav: React.PropTypes.func.isRequired,
      searchFor: React.PropTypes.func.isRequired,
      location: React.PropTypes.object,
      pathString: React.PropTypes.array,
      timeStamp: React.PropTypes.string,
      fav: React.PropTypes.array,
      dashboard: React.PropTypes.bool,
      search: React.PropTypes.object,
    }

    componentDidMount() {
      this.props.getIntranet();
    }

    shouldComponentUpdate(nextProps) {
      return nextProps.location !== this.props.location || nextProps.search !== this.props.search;
    }

    setSearch = (s) => {
      this.props.searchFor(s);
    }

    showAttachment = (path, file) => {
      window.open(formQuery(path), '_blank');
    }

    render() {
      const progress = (
        <div className="intranet-loading" style={{ display: 'flex', justifyContent: 'center', height: '100%' }}>
          <div style={{ alignSelf: 'center' }} >
            Loading
          </div>
        </div>
      );

      const IntranetDumbRef = (
        <Folder
          location={this.props.location}
          goForward={this.props.goForward}
          pathString={this.props.pathString}
          timeStamp={this.props.timeStamp}
          showAttachment={this.showAttachment}
          goToPath={this.props.goToPath}
          dashboard={this.props.dashboard}
          setSearch={this.setSearch}
          search={this.props.search}
        />
      );

      return (
        <div style={{ height: '100%' }}>
          {!this.props.location ? progress : IntranetDumbRef}
        </div>
      );
    }
}

function mapDispatchToProps(dispatch) {
  return { ...bindActionCreators(actions, dispatch) };
}

function mapStateToProps(state) {
  return { user: state.reducer.login, ...state.reducer.intranet };
}

export default connect(mapStateToProps, mapDispatchToProps)(IntranetWidget);
