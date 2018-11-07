import React, { Component } from "react";
import { connect } from "react-redux";
import Modal from "../components/Modal";
import RandomGif from "../components/random-gif";
import Gallery from "../components/Gallery";
import Theme from "../components/Theme";

import "./CalendarPage.css";
import { setGifTheme, fetchGifList } from "../actions/gif";

class CalendarPage extends Component {
  state = {
    show: false
  };

  openModal = () => {
    this.setState({
      show: true
    });
  };

  closeModal = () => {
    this.setState({
      show: false
    });
  };

  handleThemeChange = option => {
    // if the same option is clicked again offset the results
    let offset = this.props.theme === option;
    this.props.setTheme(option, offset);
  };

  render() {
    const theme = this.props.theme;
    return (
      <div className={`${theme}-background`}>
        {this.state.show ? (
          <div onClick={this.closeModal} className="back-drop" />
        ) : null}
        <Theme themeChange={this.handleThemeChange} />
        <Gallery openModal={this.openModal} theme={theme} />
        <Modal className="modal" show={this.state.show} close={this.closeModal}>
          <RandomGif />
        </Modal>
      </div>
    );
  }
}

const mapState = state => {
  return {
    theme: state.gifReducer.theme
  };
};

const mapDispatch = dispatch => {
  return {
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
