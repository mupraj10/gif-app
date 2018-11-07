import React from "react";
import { connect } from "react-redux";

import {getDate } from '../utils/date';

const GridItem = (props) => {
  return (
    <div onClick={props.onClick} className={props.title}>
      <span className='grid-date'> {getDate(props.title)} </span>
    </div>
  );
};

export default connect()(GridItem);
