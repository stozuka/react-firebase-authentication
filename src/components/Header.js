import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class Header extends Component {
  render() {
    return (
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">HOME</Link>
            </li>
            <li>
              <Link to="/secret">Secret</Link>
            </li>
            <li>
              <Link to="/signin">Signin</Link>
            </li>
            <li>
              <Link to="/signup">Signup</Link>
            </li>
            <li>
              <Link to="/signout">Signout</Link>
            </li>
          </ul>
        </nav>
        <div>{this.props.children}</div>
      </div>
    );
  }
}

Header.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Header;
