import React, { Component } from "react";
import { connect } from "react-redux";
import GridItem from "./GridItem";
import Modal from "./Modal";
import RandomGif from "./random-gif";

import "./Gallery.css";
import { fetchRandomGif } from "../actions/simpleAction";

const items = 25;

class Gallery extends Component {
  state = {
    show: false
  };

  openModalHandler = () => {
    this.setState({
      show: true
    });
  };

  closeModalHandler = () => {
    this.setState({
      show: false
    });
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

  handleClick = () => {
    console.log("in handleClick");
    this.openModalHandler();
    this.props.loadData();
  };

  render() {
    return (
      <div>
        {this.state.show ? (
          <div onClick={this.closeModalHandler} className="back-drop" />
        ) : null}
        <div className="grid-container">
          <h1> Calendar</h1>
          <div className="grid">{this.generateGrid()}</div>
        </div>
        <Modal
            className="modal"
            show={this.state.show}
            close={this.closeModalHandler}
          >
            <RandomGif />
          </Modal>
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
