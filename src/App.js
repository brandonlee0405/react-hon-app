import React from 'react';
import headerImage from './img/hon-header.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>My React App</h1>
      <h2>Author: Brandon Lee and Charles Park</h2>
      <img src={headerImage} alt="header" />
    </div>
  );
}

export default App;
