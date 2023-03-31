import React, { useReducer } from "react";

const initialState = 0;

const reducer = (state, action) => {
  switch (action) {
    case "addOne":
      return state + 1;
    case "addSix":
      return state + 6;
    case "minusOne":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};
function CountWithReducer() {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h2>CountWithReducer</h2>
      <h2>Counter App by Using UseReducer</h2>
      <h3>Current Status of Count is {count} </h3>
      <button onClick={() => dispatch("addOne")}>Add one</button>
      <button onClick={() => dispatch("addSix")}>Add Six</button>
      <button onClick={() => dispatch("minusOne")}>Minus One</button>
      <button onClick={() => dispatch("reset")}>Reset</button>

      <h4>
        {" "}
        we have created same app and receiving same output <br />
        but with more cleaner code and without having more handler{" "}
      </h4>
    </div>
  );
}

export default CountWithReducer;
