import React from 'react';
import { ProgressBar } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actions } from '../redux/actions';

let styles;

class Loading extends React.Component {

  static propTypes = {
    actions: React.PropTypes.object,
    history: React.PropTypes.object,
  };

  state = {
    progress: 0,
  };

  componentDidMount() {
    // debugger;
    this.props.actions.verifyUser();
  }

  timeout = null;

  render() {
    if (this.state.progress > 15) {
      this.props.history.push('/todo');
    }
    this.timeout = setTimeout(() => {
      this.setState({ progress: this.state.progress + (9 * Math.random()) });
    }, 1000);
    return (
      <div style={styles.container}>
        <div style={styles.welcome}>
          Loading !!
        </div>
        <div style={styles.instructions}>
          Going to cafe
        </div>
        <div style={styles.instructions}>
          Grabbing some vadas
        from padma kamal
      </div>
        <ProgressBar
          backgroundStyle={{ backgroundColor: '#cccccc', borderRadius: 2 }}
          style={{ marginTop: 10, width: 300 }}
          now={this.state.progress}
        />
    </div>
    );
  }
}

styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
};


function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch),
  };
}

function mapStateToProps(state) {
  return { ...state.reducer };
}

export default connect(mapStateToProps, mapDispatchToProps)(Loading);
