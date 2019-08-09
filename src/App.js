import React, { Component } from 'react';
import './App.css';
import Films from './Films/Films';
import Nav from './Films/Header';
import Directory from './Films/Directory';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav/>
        <Directory/>
        <Films/>
      </div>
    );
  }
}

export default App;
