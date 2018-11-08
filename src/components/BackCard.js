import React, { Component } from "react";

import "./BackCard.css";

class BackCard extends Component {
  render() {
    let gif = this.props.gif;
    return (
      <div className="back card">
          <img src={gif && gif.images.original.url} alt="some img" />
      </div>
    );
  }
}

export default BackCard;
