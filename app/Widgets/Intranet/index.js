import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { actions } from '../../redux/actions';
import { fetchIntranet, fuzzySearch, formQuery } from '../../network/intranet';
import ParseDate from '../../helper/dateParse';
import Intranet from './Intranet';

// import { getIntranet } from '../../redux/loginActions';

class IntranetWidget extends React.Component {

    static propTypes = {
      user: React.PropTypes.object.isRequired,
      intranet: React.PropTypes.object,
      tree: React.PropTypes.object,
      path: React.PropTypes.array,
      pathString: React.PropTypes.array,
      timeStamp: React.PropTypes.string,
      actions: React.PropTypes.object.isRequired,
    }
    constructor(props) {
      super(props);
      this.state = {
        tree: this.props.tree,
        path: this.props.path,
        pathString: this.props.pathString,
        timeStamp: this.props.timeStamp,
        previous: null,
        searchResult: false,
        searching: false,
        search: false,
        home: true,
        hot: false,
      };
    }
    // state = {
    //   tree: null,
    //   path: [],
    //   pathString: [],
    //   timeStamp: null,
    //   previous: null,
    //   searchResult: false,
    //   searching: false,
    //   search: false,
    //   home: true,
    //   hot: false,
    // };

    componentDidMount() {
      // console.log(this.props);
      this.props.actions.getIntranet();
    }

    setSearch = (search) => {
      this.setState({
        searching: true,
      });
      fuzzySearch(search).then((resp, err) => {
        // TODO if you press cancel while search is going
        // ga.modalview(`/search/${search}`);
        if (err && this.state.search) {
          // console.error(err);
          this.setState({
            searching: false,
            searchResult: null,
          });
        }
        if (resp && this.state.search) {
          this.setState({
            searchResult: resp,
            searching: false,
          });
        }
      });
    }


    getDirectoryTree = () => {
      fetchIntranet(this.props.user).then((res, rej) => {
        if (rej) {
          // TODO: need to work on error, to let use press retry in case of fail
          return rej;
        }
        this.setState({
          tree: res.intranet,
          path: new Array(res.intranet),
          timeStamp: ParseDate.timeSince(res.timeStamp),
        });
      });
    }

    goForward = (location) => {
      const tempArray = this.props.path.slice(0);
      const tempPathString = this.props.pathString.slice(0);
      tempPathString.push(location);
      tempArray.push(this.props.path[this.props.path.length - 1][location]);
      // if (tempPathString.length === 3) {
      //   // @recording: only increment if a subfolder inside prof
      //   increment(window.btoa(tempPathString.join('/')), this.props.user);
      // }
      this.setState({
        path: tempArray,
        pathString: tempPathString,
        search: false,
        home: true,
        hot: false,
        searching: false,
      });
    }

    goToStringPath = (pathArg) => {
      let gaPath = pathArg.toString();
      gaPath = gaPath === '' ? '/home' : gaPath;
      const pathString = pathArg.split('/');
      const path = [this.props.tree];
      pathString.forEach((subDir) => {
        path.push(path[path.length - 1][subDir]);
      });
      this.setState({
        path,
        pathString,
        searching: false,
        search: false,
        home: true,
        hot: false,
      });
    }


    handleTabChange = (type) => {
      this.setState(type);
    }

    showAttachment = (path, file) => {
      window.open(formQuery(path), '_blank');
      // increment(window.btoa(path), this.props.user);
    }
    goBack = () => {
      if (this.props.path.length === 1) return;
      const tempArray = this.props.path.slice(0, this.props.path.length - 1);
      const tempPathString = this.props.pathString.slice(0, this.props.pathString.length - 1);
      this.setState({
        path: tempArray,
        pathString: tempPathString,
        search: false,
        home: true,
        hot: false,
      });
    }
    render() {
      const progress = (
        <div style={{ display: 'flex', justifyContent: 'center', height: '100%' }}>
          <div style={{ alignSelf: 'center' }}>
          </div>
        </div>
      );

      const IntranetDumbRef = (
        <Intranet tree={this.props.tree}
          location={this.props.path[this.props.path.length - 1]}
          goForward={this.props.actions.goForward}
          path={this.props.path}
          pathString={this.props.pathString}
          goBack={this.goBack}
          timeStamp={this.props.timeStamp}
          searchResult={this.state.searchResult}
          goToStringPath={this.props.actions.goToStringPath}
          showAttachment={this.showAttachment}
          search={this.state.search}
          searching={this.state.searching}
          home={this.state.home}
          hot={this.state.hot}
          handleTabChange={this.handleTabChange}
          user={this.props.user}
          setSearch={this.setSearch}
        />
      );
      return <div style={{ height: '100%' }}>{!this.props.tree ? progress : IntranetDumbRef}</div>;
    }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch),
  };
}

function mapStateToProps(state) {
  return { user: state.reducer.login, ...state.reducer.intranet };
}

export default connect(mapStateToProps, mapDispatchToProps)(IntranetWidget);
