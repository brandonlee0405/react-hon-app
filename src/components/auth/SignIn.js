import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import '../../design/SignIn.css';
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
      <form className="input-form" noValidate autoComplete="off">
        <h4 className="sign-in-header">Sign In</h4>

        <TextField
          id="email"
          label="Email Address"
          onChange={this.handleChange}
          variant="filled"
          fullWidth="true"
          color="secondary"
        />

        <br />
        <br />

        <TextField
          id="user-pass"
          label="Password"
          onChange={this.handleChange}
          type="password"
          variant="filled"
          fullWidth="true"
          color="secondary"
        />

        <br />

        <Button variant="contained" onClick={this.getEmailAndId}>
          Log In
        </Button>

        <br />

        <NavLink id="sign-up-hyperlink" to="/signup">
          Don&#39;t have an account? Sign up here.
        </NavLink>
      </form>
    );
  }
}

export default SignIn;
