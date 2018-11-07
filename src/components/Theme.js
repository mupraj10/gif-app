import React from "react";
import { connect } from "react-redux";

import "./Theme.css";

const options = ["puppies","christmas", "superman", "disney"];

const Theme = props => {
  return (
    <div className="theme-container">
      Select a theme:
      {options.map(option => {
        return <span key={option} className='theme-option' onClick={() => props.themeChange(option)}>{option}</span>;
      })}
    </div>
  );
};

export default connect()(Theme);
