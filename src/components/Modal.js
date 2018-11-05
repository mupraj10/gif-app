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
      <div className="modal-header">
        <h3>Modal Header</h3>
        <span className="close-modal-btn" onClick={props.close}>
          ×
        </span>
      </div>
      <div className="modal-body">
        {props.children}
      </div>
    </div>
  );
};

export default connect()(Modal);
