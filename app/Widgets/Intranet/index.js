import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// import { Grid, Row } from 'react-bootstrap';

import { actions } from '../../redux/actions';

const Intranet = () => {
  return (
    <div>FUck world</div>
  );
};


function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch),
  };
}

function mapStateToProps(state) {
  return { ...state.reducer.todo };
}

export default connect(mapStateToProps, mapDispatchToProps)(Intranet);
