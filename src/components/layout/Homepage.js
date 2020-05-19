import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';

import '../../design/Homepage.css';

class Homepage extends Component {
  render() {
    return (
      <div className="homepage-search">
        <form className="homepage-input-field" noValidate autoComplete="off">
          <TextField
            id="user-search"
            label="Search A Username"
            onChange={this.handleChange}
            fullWidth="true"
            variant="filled"
            color="secondary"
          />
        </form>
      </div>
    );
  }
}

export default Homepage;
