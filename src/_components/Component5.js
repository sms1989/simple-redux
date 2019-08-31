import React from 'react';
import { connect } from "react-redux";


function Component5 ({number}) {
  return <span>{number}</span>
}

const mapStateToProps = state => {
  const {number} = state.simple;
  
  return { number };
};

export default connect(mapStateToProps)(Component5);