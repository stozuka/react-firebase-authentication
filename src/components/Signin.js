import React, { Component } from 'react';
import InputForm from './InputForm';

class Signin extends Component {
  render() {
    return <InputForm signupOrSignin="signin" />;
  }
}

export default Signin;
