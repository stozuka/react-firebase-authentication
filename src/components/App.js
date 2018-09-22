import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// Components
import Header from './Header';
import Home from './Home';
import Secret from './Secret';
import AuthCheck from './AuthCheck';
import Signin from './Signin';
import Signout from './Signout';
import Signup from './Signup';
import observeAuth from './hoc/ObserveAuth';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/signin" component={Signin} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/signout" component={Signout} />
            <AuthCheck>
              <Switch>
                <Route exact path="/secret" component={Secret} />
              </Switch>
            </AuthCheck>
          </Switch>
        </Header>
      </BrowserRouter>
    );
  }
}

export default observeAuth(App);
