import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import SignIn from './components/auth/SignIn';
import Homepage from './components/layout/Homepage';
import SignUp from './components/auth/SignUp';

import './design/App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="background-container">
        <Switch>
          <Route exact path="/" component={SignIn} />
          <Route path="/homepage" component={Homepage} />
          <Route path="/signup" component={SignUp} />
          <Route path="/signout" component={Homepage} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
