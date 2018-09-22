import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import firebase from '../../firebase/firebase';
import PropTypes from 'prop-types';

export default (WrappedComponent) => {
  class ObserveAuth extends Component {
    componentDidMount() {
      this.checkAuthState();
    }

    componentDidUpdate() {
      this.checkAuthState();
    }

    checkAuthState = () => {
      firebase.auth().onAuthStateChanged((user) => {
        this.props.authStateChange(!!user);
      });
    };

    render() {
      return <WrappedComponent />;
    }
  }

  ObserveAuth.propTypes = {
    authStateChange: PropTypes.func.isRequired,
  };

  return connect(
    null,
    actions
  )(ObserveAuth);
};
