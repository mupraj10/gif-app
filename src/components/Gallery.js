import React, { Component } from "react";
import GridItem from "./GridItem";

import "./Gallery.css";

class Gallery extends Component {
  generateGrid = () => {
    let gifList = this.props.gifSet;
    return gifList.map((gifObj, i) => {
      return (
        <GridItem
          key={`griditem${i}`}
          title={`griditem-${i}`}
          onClick={this.props.handleShow}
          gif={gifList[i]}
          flipped={this.props.flipped}
        />
      );
    });
  };

  render() {
    return (
      <div className="grid-container">
        <span> Gif Advent Calendar - {this.props.theme} </span>
        <div className="grid">{this.generateGrid()}</div>
      </div>
    );
  }
}

export default Gallery;
