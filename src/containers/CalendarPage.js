import React, { Component } from "react";
import { connect } from "react-redux";
import Modal from "../components/Modal";
import RandomGif from "../components/random-gif";
import Gallery from "../components/Gallery";
import Theme from "../components/Theme";
import DateGif from "../components/DateGif";

import "./CalendarPage.css";
import { setGifTheme, fetchGifList } from "../actions/gif";

class CalendarPage extends Component {
  state = {
    show: false,
    dateOpened: 0
  };

  componentDidMount = () => {
    this.props.loadData();
  };

  openModal = date => {
    console.log(date)
    this.setState({
      show: true,
      dateOpened: date
    });
  };

  closeModal = () => {
    this.setState({
      show: false,
      dateOpened: 0
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
        {this.state.show ? (
          <div onClick={this.closeModal} className="back-drop" />
        ) : null}
        <Theme themeChange={this.handleThemeChange} />
        <Gallery openModal={this.openModal} theme={theme} gifSet={gifSet} />
        <Modal className="modal" show={this.state.show} close={this.closeModal}>
          <DateGif gif={gifSet[this.state.dateOpened]} />
        </Modal>
      </div>
    );
  }
}

const mapState = state => {
  return {
    theme: state.gifReducer.theme,
    gifSet: state.gifReducer.gifSet
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
