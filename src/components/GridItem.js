import React from "react";
import FrontCard from "./FrontCard";
import BackCard from "./BackCard";

import "./GridItem.css";

const GridItem = props => {
  const flip = props.flip ? "flip" : "noflip";
  return (
    <div className="griditem-container">
      <div className="griditem">
        <FrontCard />
        <BackCard />
      </div>
    </div>
  );
};



export default GridItem;
