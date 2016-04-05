import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { actions } from '../../redux/actions';
import { formQuery } from '../../network/intranet';
import Intranet from './Intranet';

class IntranetWidget extends React.Component {

    static propTypes = {
      user: React.PropTypes.object.isRequired,
      location: React.PropTypes.object,
      pathString: React.PropTypes.array,
      timeStamp: React.PropTypes.string,
      actions: React.PropTypes.object.isRequired,
    }

    componentDidMount() {
      this.props.actions.getIntranet();
    }

    shouldComponentUpdate(nextProps) {
      return nextProps.location !== this.props.location;
    }

    showAttachment = (path, file) => {
      window.open(formQuery(path), '_blank');
    }

    // TODO goback
    // goBack = () => {
    //   if (this.props.path.length === 1) return;
    //   const tempArray = this.props.path.slice(0, this.props.path.length - 1);
    //   const tempPathString = this.props.pathString.slice(0, this.props.pathString.length - 1);
    //   this.setState({
    //     path: tempArray,
    //     pathString: tempPathString,
    //     search: false,
    //     home: true,
    //     hot: false,
    //   });
    // }

    render() {
      const progress = (
        <div style={{ display: 'flex', justifyContent: 'center', height: '100%' }}>
          <div style={{ alignSelf: 'center' }}>
            Loading
          </div>
        </div>
      );
      const IntranetDumbRef = (
        <div>
          <Intranet
            location={this.props.location}
            pathString={this.props.pathString}
            goToStringPath={this.props.actions.goToStringPath}
            goForward={this.props.actions.goForward}
            goBack={this.goBack}
            timeStamp={this.props.timeStamp}
            showAttachment={this.showAttachment}
          />
        </div>
      );
      return (
        <div style={{ height: '100%' }}>
          {!this.props.location ? progress : IntranetDumbRef}
        </div>
      );
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
