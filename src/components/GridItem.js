import React from "react";
import FrontCard from "./FrontCard";
import BackCard from "./BackCard";

import "./GridItem.css";
import { getDate } from "../utils/date";

const GridItem = props => {
  const flip = props.flipped ? "flip" : "";
  const date = getDate(props.title);
  const id = date - 1;
  return (
    <div className="griditem-container" onClick={() => props.handleFlip(id)}>
      <div className={`griditem ${flip}`}>
        <FrontCard date={date} />
        <BackCard gif={props.gif} />
      </div>
    </div>
  );
};

export default GridItem;
