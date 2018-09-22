import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class AuthCheck extends Component {
  render() {
    if (!this.props.login) {
      return <div>Need to login!</div>;
    }

    return this.props.children;
  }
}

AuthCheck.propTypes = {
  login: PropTypes.bool.isRequired,
  children: PropTypes.element.isRequired,
};

function mapStateToProps({ auth }) {
  return { login: auth.login };
}

export default connect(mapStateToProps)(AuthCheck);
