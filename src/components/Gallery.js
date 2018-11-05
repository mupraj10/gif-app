import React, { Component } from "react";
import { connect } from "react-redux";
import GridItem from "./GridItem";

import "./Gallery.css";
import { fetchRandomGif } from "../actions/simpleAction";

const items = 25;

class Gallery extends Component {
  handleClick = () => {
    this.props.openModal();
    this.props.loadData();
  };

  generateGrid = () => {
    const gridItems = [];
    for (let i = 0; i < items; i++) {
      gridItems.push(
        <GridItem
          key={`griditem${i}`}
          title={`griditem-${i}`}
          onClick={this.handleClick}
        />
      );
    }
    return gridItems;
  };

  render() {
    return (
      <div>
        <div className="grid-container">
          <h1> Calendar</h1>
          <div className="grid">{this.generateGrid()}</div>
        </div>
      </div>
    );
  }
}

const mapState = state => {
  return {
    gif: state.simpleReducer.randomGif
  };
};

const mapDispatch = dispatch => {
  return {
    loadData() {
      dispatch(fetchRandomGif());
    }
  };
};

export default connect(
  mapState,
  mapDispatch
)(Gallery);
