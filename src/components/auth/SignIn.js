import React from 'react';
import TextField from '@material-ui/core/TextField';

const SignIn = () => {
  return (
    <div className="container">
      <form className="input-field" noValidate autoComplete="off">
        <TextField id="filled-basic" label="Username" variant="filled" />
      </form>
      <form className="input-field" noValidate autoComplete="off">
        <TextField id="filled-basic" label="Password" variant="filled" />
      </form>
    </div>
  );
};

export default SignIn;
