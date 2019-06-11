import React from 'react';
import logo from '../../img/logo.svg';
import './app.css';
import Customer from '../customer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Customer />
    </div>
  );
}

export default App;
