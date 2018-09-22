import React, { Component } from 'react';
import InputForm from './InputForm';

class Signup extends Component {
  render() {
    return <InputForm signupOrSignin="signup" />;
  }
}

export default Signup;
