import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import SignIn from './components/auth/SignIn';
import Homepage from './components/layout/Homepage';
import './design/App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="background-container">
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/signin" component={SignIn} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
