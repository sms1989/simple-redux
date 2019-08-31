import React from 'react';
import { connect } from "react-redux";
import { simpleActions } from "../_actions";

function Component3 ({dispatch}) {
  return <div>
    <button onClick={()=>dispatch(simpleActions.decrement())}>-</button>
    <button onClick={()=>dispatch(simpleActions.increment())}>+</button>
  </div>
}
  

export default connect()(Component3)