import React, { useReducer } from "react";

const initialState = {
  firstCount: 0,
  secondCount: 1,
};
const reducer = (state, action) => {
  switch (action.type) {
    
    case "addOneC1":
    return { ...state, firstCount: state.firstCount + action.value };
    
    case "addOneC2":
    return { ...state, secondCount: state.secondCount + action.value };
    
    case "resetC2":
    return initialState;
    
    default:
    return state;
  }
};
function FifthExample() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h1>Fifth Example</h1>
      <h2>Current status of count is {count.firstCount} </h2>
      <h2>Current status of Second count is {count.secondCount} </h2>
      <h3>
        Please click on the buttons Bellow <br /> to Trigger the Required
        Function
      </h3>
      <button onClick={() => dispatch({ type: "addOneC1", value: 1 })}>
        Add one C1
      </button>
      <button onClick={() => dispatch({ type: "addOneC1", value: 6 })}>
        Add Six C1
      </button>
      <button onClick={() => dispatch({ type: "addOneC1", value: 5 })}>
        Add Five C1
      </button>
      <button onClick={() => dispatch({ type: "addOneC1", value: 7 })}>
        Add Seven C1
      </button>
      <button onClick={() => dispatch({ type: "addOneC1", value: -1 })}>
        Decrement C1
      </button>
      <button onClick={() => dispatch({ type: "addOneC1", value: -3 })}>
        Decrement 3 C1
      </button>
      <button onClick={() => dispatch({ type: "addOneC1", value: -5 })}>
        Decrement 5 C1
      </button>
      {/* <button onClick={() => dispatch({ type: "resetC1" })}>Rest C1</button> */}
      <br />
      <br />
      <button onClick={() => dispatch({ type: "addOneC2", value: 1 })}>
        Add one C2
      </button>
      <button onClick={() => dispatch({ type: "addOneC2", value: 6 })}>
        Add Six C2
      </button>
      <button onClick={() => dispatch({ type: "addOneC2", value: 9 })}>
        Add Nine C2
      </button>
      <button onClick={() => dispatch({ type: "addOneC2", value: 4 })}>
        Add Four C2
      </button>
      <button onClick={() => dispatch({ type: "addOneC2", value: -1 })}>
        Decrement C2
      </button>
      <button onClick={() => dispatch({ type: "addOneC2", value: -3 })}>
        Decrement 3 C2
      </button>
      <button onClick={() => dispatch({ type: "addOneC2", value: -5 })}>
        Decrement 5 C2
      </button>
      <button onClick={() => dispatch({ type: "resetC2" })}>
        Rest Both count Status
      </button>
      {}
      <p>
        in This example we see that how can we can change values dynamically.
      </p>
    </div>
  );
}

export default FifthExample;
