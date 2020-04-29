import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import headerImage from './img/hon-header.jpg';
import SignIn from './components/auth/SignIn';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/signin" component={SignIn} />
      </Switch>
      <img src={headerImage} alt="header" />
    </div>
  );
}

export default App;
