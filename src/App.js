import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Jumbotron from "./components/jumbo";
import Navbar from "./components/nav";
import Social from "./components/social";
import characters from "./characters.json";
import CharacterCard from "./components/CharacterCard";

let array = [1, 2, 3];
console.log(array)
class App extends Component {

  // Seting the characters array 
  state = {
    characters,
    score: "",
    topScore: "",
    clicked: false
  };



  componentDidMount = () => {
    this.shuffleChars();

  }



  shuffleChars = () => {

    var counter = array.length, temp, index;
    while (counter> 0) {
      index = Math.floor(Math.random()*counter);
      counter--;
      temp = array[counter];
      array[counter] = array[index];
      array[index] = temp;
    }

    console.log(array);
    console.log(this.state.characters);

  }


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
