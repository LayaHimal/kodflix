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
        
        <div className="container">
        
          <div className="item"><h2>Black Mirror</h2></div>
          <div className="item"><h2>Breaking Bad</h2></div> 
          <div className="item"><h2>Death Note</h2></div> 
          
        </div>
        <div className="container">
          <div className="item"><h2>Game of Thrones</h2></div>
          <div className="item"><h2>The Walking Dead</h2></div> 
          <div className="item"><h2>The Wire</h2></div> 

        </div>
        

      </div>
    );
  }
}
//<img src={moviecover} className="MovieCover"/>
export default App;
