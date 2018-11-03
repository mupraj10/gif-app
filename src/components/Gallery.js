import React, { Component } from "react";
import { connect } from "react-redux";
import GridItem from "./GridItem";

import "./Gallery.css";

const items = 25;

class Gallery extends Component {
  generateGrid = () => {
    const gridItems = [];
    for (let i = 0; i < items; i++) {
      gridItems.push(<GridItem title={`griditem-${i}`} />);
    }
    return gridItems;
  };

  render() {
    return (
      <div className='grid-container'>
        <h1> Calendar</h1>
        <div className='grid'>{this.generateGrid()}</div>
      </div>
    );
  }
}

const mapState = state => {
  return {
    gif: state.simpleReducer.randomGif
  };
};

export default connect(mapState)(Gallery);
