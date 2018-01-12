import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Jumbotron from "./components/jumbo";
import Navbar from "./components/nav";
import Social from "./components/social";
import characters from "./characters.json";
import CharacterCard from "./components/CharacterCard";

// let array = [1, 2, 3];
// console.log(array)
class App extends Component {

  // Seting the characters array 
  state = {
    characters,
    score: 0,
    topScore: 0,
    clicked: false  
    
  };

  // =================================================

  // Shuffling the characters array

  // =================================================


  shuffleChars = (arr) => {

    var counter = arr.length, temp, index;
    while (counter> 0) {
      index = Math.floor(Math.random()*counter);
      counter--;
      temp = arr[counter];
      arr[counter] = arr[index];
      arr[index] = temp;
    }

    return arr;   
    
    
    // console.log(this.state.shuffledArr);    

  };

  // =================================================

  // Increase score function

  // =================================================

  increaseScore = () => {

    this.state.score = this.state.score + 1;
    console.log(this.state.score);

  }

  






  render() {
    this.shuffleChars(this.state.characters)
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
                scoreUp={this.increaseScore}
                />

              ))}
                          
          <Social />
          
        </div>
      </div>
    );
  }
}

export default App;
