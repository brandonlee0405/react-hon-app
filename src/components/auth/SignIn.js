import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

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
      <div className="container">
        <h5 className="grey-text text-darken-3">Sign In</h5>
        <form className="input-field" noValidate autoComplete="off">
          <TextField
            id="email"
            label="Email Address"
            onChange={this.handleChange}
            fullWidth="true"
            variant="outlined"
          />
          <br />
          <TextField
            id="user-pass"
            label="Password"
            onChange={this.handleChange}
            fullWidth="true"
            variant="outlined"
          />
          <Button variant="outlined" onClick={this.getEmailAndId}>
            Log In
          </Button>
          <a href="../layout/Homepage">Don't have an account? Click here.</a>
        </form>
      </div>
    );
  }
}

export default SignIn;
