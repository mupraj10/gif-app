import React, { Component } from "react";
import { connect } from "react-redux";

class RandomGif extends Component {
  render() {
    return (
      <div>
        Adding in Paper
        <img src={this.props.gif.image_original_url} alt="some img" />
      </div>
    );
  }
}

const mapState = state => {
  return {
    gif: state.simpleReducer.randomGif
  };
};

export default connect(mapState)(RandomGif);
