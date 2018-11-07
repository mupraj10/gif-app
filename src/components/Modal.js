import React from "react";
import { connect } from "react-redux";

import "./Modal.css";

const Modal = props => {
  return (
    <div
      className="modal-container"
      style={{
        opacity: props.show ? "1" : "0",
        transform: props.show ? "translateY(-60vh)" : "translateY(-100vh)"
      }}
    >
      <div
        className="modal-cover"
        style={{
          opacity: props.open ? "0" : "1",
          transform: props.open ? "translateY(-60vh)" : "none"
        }}
      >
        <span className="modal-covertext" onClick={props.handleOpen}>
          Click to reveal!
        </span>
      </div>
      <div className="modal-header">
        <span className="close-modal-btn" onClick={props.close}>
          ×
        </span>
      </div>
      <div className="modal-body">{props.children}</div>
    </div>
  );
};

export default connect()(Modal);
