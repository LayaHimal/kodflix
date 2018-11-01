import React, { Component } from 'react';
import logo from './logo.svg';
import moviecover from './denofthieves.jpg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className ="App-logo"/>
          <h1 className="App-title">Hello</h1>
        </header>
        <p className="App-intro">
          
        </p>
        <img src={moviecover} className="MovieCover"/>

      </div>
    );
  }
}

export default App;
