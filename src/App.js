import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Jumbotron from "./components/jumbo";
import Navbar from "./components/nav";
import Social from "./components/social";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          
          <Navbar />
          <Jumbotron />
          <Social />
          
        </div>
      </div>
    );
  }
}

export default App;
