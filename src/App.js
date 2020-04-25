import React from 'react';
import headerImage from './img/hon-header.jpg';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import './App.css';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

function App() {
  const classes = useStyles();

  return (
    <div className="App">
      <h1>My React App</h1>
      <h2>Author: Brandon Lee and Charles Park</h2>
      <img src={headerImage} alt="header" />

      <form className={classes.root} noValidate autoComplete="off">
        <TextField id="filled-basic" label="Username" variant="filled" />
      </form>

      <form className={classes.root} noValidate autoComplete="off">
        <TextField id="filled-basic" label="Password" variant="filled" />
      </form>
    </div>
  );
}

export default App;
