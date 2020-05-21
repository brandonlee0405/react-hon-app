import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import '../../design/SignUp.css';

class SignUp extends Component {
  handleChange = () => {
    console.log('Username or password edited.');
  };

  render() {
    return (
      <form
        id="create-account-form"
        className="input-form"
        noValidate
        autoComplete="off"
      >
        <h4 className="create-account-header">Create Account</h4>

        <TextField
          id="email"
          label="Username"
          onChange={this.handleChange}
          variant="filled"
          fullWidth="true"
          color="secondary"
        />

        <br />
        <br />

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
          id="email"
          label="Create Password"
          onChange={this.handleChange}
          variant="filled"
          fullWidth="true"
          color="secondary"
          type="password"
        />

        <br />
        <br />

        <TextField
          id="email"
          label="Confirm Password"
          onChange={this.handleChange}
          variant="filled"
          fullWidth="true"
          color="secondary"
          type="password"
        />

        <Button id="create-account-button" variant="contained">
          Create Account
        </Button>
      </form>
    );
  }
}

export default SignUp;
