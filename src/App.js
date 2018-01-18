import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Jumbotron from "./components/jumbo";
import Navbar from "./components/nav";
import Social from "./components/social";
import Wrapper from "./components/Wrapper";
import characters from "./characters.json";
import CharacterCard from "./components/CharacterCard";

// let array = [1, 2, 3];
// console.log(array)
class App extends Component {

  // Seting the characters array 
  state = {
    characters,
    score: 0,
    topScore: 0     
    
  };


  // =================================================

  // Shuffling the characters array

  // =================================================


 shuffleChars = () => {
   
   const characters = this.state.characters.map(a =>
     [Math.random(),a]).sort((a,b) => a[0]-b[0]).map((a) => a[1]);
 
 this.setState({ characters });
 };

  // =================================================

  // Increase score function

  // =================================================

  increaseScore = (id) => {

    characters[id].clicked === true;

    console.log(characters);
     
      if (characters[id].clicked === false){
        // this.setState({ count: this.state.count + 1 });
        this.setState({ score: this.state.score + 1 });
        console.log(this.state.score)
       characters[id].clicked === true
      }
      else if (characters[id].clicked === true){
        console.log(characters[id].clicked)
        // this.setState({ count: this.state.count + 1 });
        this.setState({ score: this.state.score - 1 });
        console.log(this.state.score)
      }
      else if(this.state.score === 10) {
      this.setState({
        characters,
        score: 0,
        topScore: 0 
      })
      }
    };


  

  // =================================================

  // startGame

  // =================================================

  



  






  render() {
    // this.shuffleChars(this.state.characters)
    return (
    
      <div className="App">
        
          <Navbar
          score={this.state.score}
           />

          <Jumbotron /> 
          <Wrapper>        
            
            {this.state.characters.map(character => (

              <CharacterCard
                id={character.id}
                key={character.id}
                name={character.name}
                image={character.image}
                scoreUp={this.increaseScore}
                shuffleCharacters={this.shuffleChars}                
              
                />

              ))}
            </Wrapper>
                          
          <Social />
          
        
      </div>
    
    );
  }
}

export default App;
