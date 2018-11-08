import React, { Component } from "react";
import { connect } from "react-redux";
import Gallery from "../components/Gallery";
import Theme from "../components/Theme";

import "./CalendarPage.css";
import { setGifTheme, fetchGifList, flip } from "../actions/gif";

const { update, set } = require("immutable");

class CalendarPage extends Component {
  componentDidMount = () => {
    this.props.loadData();
  };

  handleFlip = id => {
    const currentState = this.props.data;
    console.log(currentState[id].flipped);
    const status = currentState[id].flipped ? false : true;
    console.log(status);

    const updatedData = update(currentState, id, obj =>
      set(obj, "flipped", status)
    );
    this.props.flip(updatedData);
  };
  handleThemeChange = option => {
    // if the same option is clicked again offset the results
    let offset = this.props.theme === option;
    this.props.setTheme(option, offset);
  };

  render() {
    const { theme, data } = this.props;
    return (
      <div className={`${theme}-background`}>
        <Theme themeChange={this.handleThemeChange} />
        <Gallery handleFlip={this.handleFlip} data={data} theme={theme} />
      </div>
    );
  }
}

const mapState = state => {
  return {
    theme: state.gifReducer.theme,
    data: state.gifReducer.data
  };
};

const mapDispatch = dispatch => {
  return {
    loadData() {
      dispatch(fetchGifList());
    },
    setTheme(theme, offset) {
      dispatch(setGifTheme(theme));
      dispatch(fetchGifList(offset));
    },
    flip(newList) {
      dispatch(flip(newList));
    }
  };
};

export default connect(
  mapState,
  mapDispatch
)(CalendarPage);
