import React from "react";
import GridItem from "./GridItem";

import "./Gallery.css";

const Gallery = props => {
  const generateGrid = data => {
    return data.map(gifObj => {
      let id = gifObj.id;
      return (
        <GridItem
          key={`griditem${id}`}
          title={`griditem-${id}`}
          handleFlip={props.handleFlip}
          gif={gifObj.gif}
          flipped={gifObj.flipped}
        />
      );
    });
  };
  return (
    <div className="grid-container">
      <div className="grid-title">
        <h1> Gif Advent Calendar - {props.theme} </h1>
      </div>
      <div className="grid">{generateGrid(props.data)}</div>
    </div>
  );
};

export default Gallery;
