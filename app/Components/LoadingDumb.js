import React from 'react';
import { ProgressBar } from 'react-bootstrap';

let styles;

export default class LoadingDumb extends React.Component {
  state = {
    progress: 0,
  };


  componentWillUnmount() {
    clearTimeout(this.timeout);
  }

  timeout = null;

  render() {
    this.timeout = setTimeout(() => {
      this.setState({ progress: this.state.progress + (3 * Math.random()) });
    }, 500);

    return (
      <div style={{ display: 'flex', height: '100%' }}>
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
