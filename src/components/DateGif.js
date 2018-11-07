import React, { Component } from "react";

class DateGif extends Component {
  render() {
    let gif = this.props.gif;
    return (
      <div>
        Adding in Paper
        <img src={gif && gif.images.original.url} alt="some img" />
      </div>
    );
  }
}

export default DateGif;
