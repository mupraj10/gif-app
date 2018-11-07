import React, { Component } from "react";

import "./DateGif.css";

class DateGif extends Component {
  render() {
    let gif = this.props.gif;
    return (
      <div className="gif-container">
        <img src={gif && gif.images.original.url} alt="some img" />
      </div>
    );
  }
}

export default DateGif;
