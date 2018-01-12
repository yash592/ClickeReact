import React from "react";
import "./CharacterCard.css";

const CharacterCard = props => (
  <div className="card">
    <div className="img-container">
      <img onClick = {() => {props.scoreUp(props.id); props.shuffleCharacters()}} alt={props.name} src={props.image} />
    </div>
    
  </div>
);

export default CharacterCard;