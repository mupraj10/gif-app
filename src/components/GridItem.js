import React, { Component } from "react";
import { connect } from "react-redux";

class GridItem extends Component {
  render() {
    return (
      <div className={this.props.title}>
      thing
      </div>
    );
  }
}


export default connect()(GridItem);
