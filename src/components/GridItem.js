import React from "react";
import { connect } from "react-redux";

import {getDate } from '../utils/date';

const GridItem = (props) => {
  return (
    <div onClick={props.onClick} className={props.title}>
      {getDate(props.title)}
    </div>
  );
};

export default connect()(GridItem);
