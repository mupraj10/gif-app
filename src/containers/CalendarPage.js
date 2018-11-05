import React, { Component } from "react";
import { connect } from "react-redux";
import Modal from "../components/Modal";
import RandomGif from "../components/random-gif";
import Gallery from "../components/Gallery";

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

  render() {
    return (
      <div>
        {this.state.show ? (
          <div onClick={this.closeModal} className="back-drop" />
        ) : null}
        <Gallery openModal={this.openModal} />
        <Modal className="modal" show={this.state.show} close={this.closeModal}>
          <RandomGif />
        </Modal>
      </div>
    );
  }
}

export default connect()(CalendarPage);
