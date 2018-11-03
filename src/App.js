import React, { Component } from "react";
import { connect } from "react-redux";

import "./App.css";
import RandomGif from "./components/random-gif";
import { fetchRandomGif } from "./actions/simpleAction";


class App extends Component {
  componentDidMount() {
    this.props.loadData()
    // giphy.random("s").then(foundGif => console.log(foundGif));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <RandomGif />
        </header>
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
      dispatch(fetchRandomGif())
    }
  };
};

export default connect(
  mapState,
  mapDispatch
)(App);
