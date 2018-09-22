import React, { Component } from 'react';
import * as actions from '../actions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class InputForm extends Component {
  state = {
    email: '',
    password: '',
  };

  componentWillUnmount() {
    this.props.removeMessages();
  }

  handleSubmit = (event) => {
    event.preventDefault();

    if (this.props.signupOrSignin === 'signup') {
      this.props.signup(this.state);
    }
    if (this.props.signupOrSignin === 'signin') {
      this.props.signin(this.state);
    }

    this.setState({ email: '', password: '' });
  };

  handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  };

  renderMessage = () => {
    if (this.props.message) {
      return <div>{this.props.message}</div>;
    }

    return null;
  };

  renderErrorMessage = () => {
    if (this.props.errorMessage) {
      return <div>{this.props.errorMessage}</div>;
    }

    return null;
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="emailInput">email</label>
          <input
            id="emailInput"
            name="email"
            value={this.state.email}
            onChange={this.handleInputChange}
          />
          <label htmlFor="passwordInput">password</label>
          <input
            id="passwordInput"
            name="password"
            value={this.state.password}
            onChange={this.handleInputChange}
          />
          <input type="submit" />
        </form>
        {this.renderMessage()}
        {this.renderErrorMessage()}
      </div>
    );
  }
}

InputForm.propTypes = {
  removeMessages: PropTypes.func.isRequired,
  signupOrSignin: PropTypes.string.isRequired,
  signup: PropTypes.func.isRequired,
  signin: PropTypes.func.isRequired,
  message: PropTypes.string.isRequired,
  errorMessage: PropTypes.string.isRequired,
};

function mapStateToProps({ auth }) {
  return {
    message: auth.message,
    errorMessage: auth.errorMessage,
  };
}

export default connect(
  mapStateToProps,
  actions
)(InputForm);
