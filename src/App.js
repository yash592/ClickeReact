import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Jumbotron from "./components/jumbo";
import Navbar from "./components/nav";
import Social from "./components/social";
import characters from "./characters.json";
import CharacterCard from "./components/CharacterCard";

class App extends Component {

  // Seting the characters array 
  state = {
    characters
  };


  render() {
    return (
      <div className="App">
        <div className="container">
          
          <Navbar />
          <Jumbotron />
          
            
            {this.state.characters.map(character => (

              <CharacterCard
                id={character.id}
                key={character.id}
                name={character.name}
                image={character.image}
                />

              ))}
            
          <Social />
          
        </div>
      </div>
    );
  }
}

export default App;
