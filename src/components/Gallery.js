import React, { Component } from "react";
import GridItem from "./GridItem";

import "./Gallery.css";

class Gallery extends Component {
  handleClick = (evt, date) => {
    this.props.openModal(date);
  };

  // generateGrid = () => {
  //   const gridItems = [];
  //   for (let i = 0; i < items; i++) {
  //     gridItems.push(
  //       <GridItem
  //         key={`griditem${i}`}
  //         title={`griditem-${i}`}
  //         onClick={this.handleClick}
  //       />
  //     );
  //   }
  //   return gridItems;
  // };

  generateGrid = () => {
    let gifList = this.props.gifSet  
    return gifList.map((gifObj, i) => {
      return (
        <GridItem
          key={`griditem${i}`}
          title={`griditem-${i}`}
          onClick={(evt) => this.handleClick(evt, i)}
        />
      );
    });
  };

  render() {
    return (
      <div>
        <div className="grid-container">
          <span> Gif Advent Calendar - {this.props.theme} </span>
          <div className="grid">{this.generateGrid()}</div>
        </div>
      </div>
    );
  }
}

export default (Gallery);
