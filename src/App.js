import React, { Component } from 'react';
import Nick from "./Components/Nick"
import Army from "./Components/Army"
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          <Nick/>
          <Army/>
        </p>
      </div>
    );
  }
}

export default App;


///////test test test app can be trashed just pracitced importing components. 
