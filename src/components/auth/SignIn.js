import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';

class SignIn extends Component {
  handleChange = () => {
    console.log('Handle Change for Email');
  };

  render() {
    return (
      <div className="container">
        <h5 className="grey-text text-darken-3">Sign In</h5>
        <form className="input-field" noValidate autoComplete="off">
          <TextField
            id="standard-required"
            label="Email Address"
            onChange={this.handleChange}
            fullWidth="true"
          />
          <br />
          <TextField
            id="filled-basic"
            label="Password"
            onChange={this.handleChange}
            fullWidth="true"
          />
        </form>
      </div>
    );
  }
}

export default SignIn;