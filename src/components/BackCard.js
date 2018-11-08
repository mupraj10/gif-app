import React from "react";

const BackCard = props => {
  let gif = props.gif;
  return (
    <div className="back card">
      <img src={gif && gif} alt="some img" />
    </div>
  );
};

export default BackCard;
