import React, { Component } from "react";
import { connect } from "react-redux";
import Gallery from "../components/Gallery";
import Theme from "../components/Theme";

import "./CalendarPage.css";
import { setGifTheme, fetchGifList } from "../actions/gif";

class CalendarPage extends Component {
  state = {
    show: false,
    dateOpened: 0,
    open: false
  };

  componentDidMount = () => {
    this.props.loadData();
  };

  handleShow = () => {
    this.setState({
      open: false,
      show: true
    });
  };
  handleThemeChange = option => {
    // if the same option is clicked again offset the results
    let offset = this.props.theme === option;
    this.props.setTheme(option, offset);
  };

  render() {
    const { theme, gifSet } = this.props;
    return (
      <div className={`${theme}-background`}>
        <Theme themeChange={this.handleThemeChange} />
        <Gallery handleShow={this.handleShow} show={this.state.show} theme={theme} gifSet={gifSet} />
      </div>
    );
  }
}

const mapState = state => {
  return {
    theme: state.gifReducer.theme,
    gifSet: state.gifReducer.gifSet, 
    // data: 
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
    }
  };
};

export default connect(
  mapState,
  mapDispatch
)(CalendarPage);
