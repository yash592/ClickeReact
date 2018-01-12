import React from "react";
import "./CharacterCard.css";

const CharacterCard = props => (
  <div className="card">
    <div className="img-container">
      <img onClick = {() => props.startDaGame()} alt={props.name} src={props.image} />
    </div>
    
  </div>
);

export default CharacterCard;