import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';

import headerImage from '../../img/hon-header.jpg';

class Homepage extends Component {
  render() {
    return (
      <div className="container">
        <img src={headerImage} alt="header" className="center" />
        <form className="input-field" noValidate autoComplete="off">
          <TextField
            id="standard-required"
            label="Search A Username"
            onChange={this.handleChange}
            fullWidth="true"
          />
        </form>
      </div>
    );
  }
}

export default Homepage;
