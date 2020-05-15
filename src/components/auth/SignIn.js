import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import '../../design/SignInStylesheet.css';
import { NavLink } from 'react-router-dom';

class SignIn extends Component {
  handleChange = () => {
    console.log('Username or password edited.');
  };

  getEmailAndId = () => {
    console.log(
      `Username: ${document.getElementById('email').value}, Password: ${
        document.getElementById('user-pass').value
      }`
    );
  };

  render() {
    return (
      <div className="sign-in-container">
        <h5 className="sign-in-header">Sign In</h5>
        <form className="input-field" noValidate autoComplete="off">
          <div className="textfield-container">
            <TextField
              id="email"
              label="Email Address"
              onChange={this.handleChange}
              variant="outlined"
              fullWidth="true"
            />
            <br />
            <br />
            <TextField
              id="user-pass"
              label="Password"
              onChange={this.handleChange}
              type="password"
              variant="outlined"
              fullWidth="true"
            />
            <br />
          </div>
          <Button variant="outlined" onClick={this.getEmailAndId}>
            Log In
          </Button>
          <br />
          <NavLink to="/signup">
            Don&#39;t have an account? Sign up here.
          </NavLink>
        </form>
      </div>
    );
  }
}

export default SignIn;
