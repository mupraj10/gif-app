import React from "react";

import "./Theme.css";

const options = ["puppies", "christmas", "superman", "disney"];

const Theme = props => {
  return (
    <div className="theme-container">
      Select a theme:
      {options.map(option => {
        return (
          <span
            key={option}
            className="theme-option"
            onClick={() => props.themeChange(option)}
          >
            <span> {option}</span>
          </span>
        );
      })}
    </div>
  );
};

export default Theme;
