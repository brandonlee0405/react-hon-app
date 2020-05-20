import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import '../../design/Homepage.css';
import Button from '@material-ui/core/Button';

class Homepage extends Component {
  render() {
    return (
      <form className="homepage-input-field" noValidate autoComplete="off">
        <TextField
          id="user-search"
          label="Search A Username"
          onChange={this.handleChange}
          fullWidth="true"
          variant="filled"
          color="secondary"
        />

        <Button id="homepage-username-search-button" variant="contained">
          Search
        </Button>
      </form>
    );
  }
}

export default Homepage;
