import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import PropTypes from 'prop-types';

class Signout extends Component {
  componentDidMount() {
    this.props.signout();
  }

  render() {
    return <div>Signed out!</div>;
  }
}

Signout.propTypes = {
  signout: PropTypes.func.isRequired,
};

export default connect(
  null,
  actions
)(Signout);
