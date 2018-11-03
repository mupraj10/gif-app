import React, { Component } from "react";
import { connect } from "react-redux";

import "./App.css";
import Gallery from "./components/Gallery";
import { fetchRandomGif } from "./actions/simpleAction";

class App extends Component {
  componentDidMount() {
    this.props.loadData();
  }

  render() {
    return (
      <div className="App">
        <Gallery />
      </div>
    );
  }
}

const mapState = state => {
  return {
    gif: state.randomGif
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
)(App);
