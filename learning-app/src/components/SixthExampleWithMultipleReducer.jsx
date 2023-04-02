import React, { useReducer } from "react";

const initialState = "Margo";
const reducer = (state, action) => {
  switch (action.type) {
    case "addName1":
      return action.value;
    case "reset":
      return initialState;
    default:
      return state;
  }
};

function SixthExampleWithMultipleReducer() {
  const [count, dispatch] = useReducer(reducer, initialState);
  const [countTwo, dispatchTwo] = useReducer(reducer, initialState);
  return (
    <div>
      <h1>Using the String As initialState</h1>
      <h2>{count}</h2>
      <button onClick={() => dispatch({ type: "addName1", value: "Mobi" })}>
        Change Name 1
      </button>
      <button onClick={() => dispatch({ type: "addName1", value: "Mack" })}>
        Change Name 2
      </button>
      <button onClick={() => dispatch({ type: "addName1", value: "Matt" })}>
        Change Name 3
      </button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
      <p>
        Here we have used only one action in switch <br /> for three Different
        Buttons and the other action <br /> With The heuse of type and value
        property pr <br /> We are able to change the value Dynamically <br />
        for Reset Button.

        <h3>Using the Second useReducer in same Component </h3>
        <h2>{countTwo} </h2>
        <button onClick={()=>dispatchTwo({type:'addName1', value:'Mobi'})} >Change Name 1</button>
        <button onClick={()=>dispatchTwo({type:'addName1', value:'Max'})} >Change Name2</button>
        <button onClick={()=>dispatchTwo({type:'addName1', value:'Matt'})} >Change Name3</button>
        <button onClick={()=>dispatchTwo({type:'reset'})} >Reset</button>

        <p>We can see here Multiple UseReduces can use <br />
        Same initialState and reducer function as well <br />
        we just need specific (Unique) Name for <br />
         assigning the useReducer </p>

      </p>
    </div>
  );
}

export default SixthExampleWithMultipleReducer;
