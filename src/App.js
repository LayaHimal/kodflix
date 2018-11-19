import React, { Component } from 'react';
//import MovieCoverGallery from './MovieCoverGallery';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import About from './ComponentPages/About';
import Contacts from './ComponentPages/Contacts';
import Home from './ComponentPages/Home';
import Details from './MovieCoverImages/Details';

import './App.css';

class App extends Component{

  render() {
    return (
      <Router>
        <div className ="App">
        <Route path = './About' component = {About}/>
        <Route path = '/Contacts' component = {Contacts}/>
        <Route exact path = '/' component = {Home}/>
        <Route path = '/Details' component = {Details}/>
      

        </div>
        </Router>
    )
  }
}
export default App