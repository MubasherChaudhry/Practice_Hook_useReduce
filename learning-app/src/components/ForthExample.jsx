import { useReducer } from "react";

const initialState = {
  firstCount: 0,
  secondCount: 7,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "addOneC1":
      return { ...state, firstCount: state.firstCount + 1 };
    case "addSixC1":
      return { ...state, firstCount: state.firstCount + 6 };
    case "decrementC1":
      return { ...state, firstCount: state.firstCount - 1 };
    case "resetC1":
      return initialState;

    case "addOneC2":
      return { ...state, secondCount: state.secondCount + 1 };
    case "addSixC2":
      return { ...state, secondCount: state.secondCount + 6 };
    case "decrementC2":
      return { ...state, secondCount: state.secondCount - 1 };
    case "resetC2":
      return initialState;
    default:
      return state;
  }
};

function ForthExample() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h1>Forth Example</h1>
      <h2>Current status of count is {count.firstCount} </h2>
      <h2>Current status of Second count is {count.secondCount} </h2>
      <h3>
        Please click on the buttons Bellow <br /> to Trigger the Required
        Function
      </h3>
      <button onClick={() => dispatch({ type: "addOneC1" })}>Add one C1</button>
      <button onClick={() => dispatch({ type: "addSixC1" })}>Add Six C1</button>
      <button onClick={() => dispatch({ type: "decrementC1" })}>
        Decrement C1
      </button>
      <button onClick={() => dispatch({ type: "resetC1" })}>Rest C1</button>
      <br />
      <br />
      <button onClick={() => dispatch({ type: "addOneC2" })}>Add one C2</button>
      <button onClick={() => dispatch({ type: "addSixC2" })}>Add Six C2</button>
      <button onClick={() => dispatch({ type: "decrementC2" })}>
        Decrement C2
      </button>
      <button onClick={() => dispatch({ type: "resetC2" })}>Rest C2</button>
      <p>
        this counter contain two properties in initial State <br /> we used rest
        operator and dot notation to target specific property
      </p>
      
    </div>
  );
}

export default ForthExample;
