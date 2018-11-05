import React, { Component } from 'react';
import BM from './blackmirror.jpg'
//eslint-disable-next-line
import moviecover from './denofthieves.jpg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
<h1 className="App-title">Hello</h1>
        </header>
       
       
        <div className="container">
        
          <div className="item"><img src={moviecover} className="MovieCover"/></div>
          <div className="item"><h2>Breaking Bad</h2></div> 
          <div className="item"><h2>Death Note</h2></div> 
        </div>

        <div className="container">

          <div className="item"> <img src ={BM} /></div>
          <div className="item"><h2>The Walking Dead</h2></div> 
          <div className="item"><h2>The Wire</h2></div> 

export default App