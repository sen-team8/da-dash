import React from 'react';
import { AppBar, Divider } from 'material-ui';
import Tabs from './Tabs';
import MiscBar from './MiscBar';

export default class Viewer extends React.Component {

    propTypes = {
      goBack: React.PropTypes.func.isRequired,
      setSearch: React.PropTypes.func.isRequired,
      search: React.PropTypes.bool.isRequired,
      home: React.PropTypes.bool.isRequired,
      hot: React.PropTypes.bool.isRequired,
      handleTabChange: React.PropTypes.func.isRequired,
      pathString: React.PropTypes.array.isRequired,
      goToStringPath: React.PropTypes.func.isRequired,
    }

    state = {
      search: false,
    };

    handleSearchChange = () => {
      const value = this.refs.search.getValue();
      if (value.length >= 4) {
        clearTimeout(this.lastQuery);
        this.lastQuery = setTimeout(() => this.props.setSearch(value), 300);
        this.setState({
          search: true,
        });
      }
    }

    clearSearch = () => {
      clearTimeout(this.lastQuery);
      this.lastQuery = null;
      this.props.setSearch(null);
      this.refs.search.setValue('');
      this.setState({
        search: false,
      });
    }

    lastQuery = undefined;

    render() {
      return (
        <div>
          <AppBar
            title={<span>DAINTRANET &nbsp; 👹</span>}
          />
          <Tabs
            search={this.props.search}
            home={this.props.home}
            hot={this.props.hot}
            handleTabChange={this.props.handleTabChange}
          />
          <MiscBar
            setSearch={this.props.setSearch}
            search={this.props.search}
            home={this.props.home}
            hot={this.props.hot}
            goBack={this.props.goBack}
            pathString={this.props.pathString}
            goToStringPath={this.props.goToStringPath}
          />
          <Divider/>
        </div>
      );
    }
}
