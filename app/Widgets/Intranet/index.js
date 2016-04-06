import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';
import { actions } from '../../redux/actions';
import { formQuery } from '../../network/intranet';
import Intranet from './Intranet';
import Toolbar from './Toolbar';

class IntranetWidget extends React.Component {

    static propTypes = {
      user: React.PropTypes.object.isRequired,
      location: React.PropTypes.object,
      pathString: React.PropTypes.array,
      timeStamp: React.PropTypes.string,
      actions: React.PropTypes.object.isRequired,
      dashboard: React.PropTypes.bool,
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

    render() {
      const progress = (
        <div style={{ display: 'flex', justifyContent: 'center', height: '100%' }}>
          <div style={{ alignSelf: 'center' }}>
            Loading
          </div>
        </div>
      );

      const IntranetDumbRef = (
          <Intranet
            location={this.props.location}
            pathString={this.props.pathString}
            goToStringPath={this.props.actions.goToStringPath}
            goForward={this.props.actions.goForward}
            goBack={this.goBack}
            timeStamp={this.props.timeStamp}
            showAttachment={this.showAttachment}
          />
      );

      const isDashboard = this.props.dashboard ?
        (
          <Link to={'intranet'} >
            Intranet
          </Link>
        ) :
        (
          <Toolbar pathString={this.props.pathString}
            goToStringPath={this.props.actions.goToStringPath}
          />
        );
      return (
        <div style={{ height: '100%' }}>
          {isDashboard}
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
