import React, { useReducer } from "react";

const initialState = {
  firstCounter: 0,
};
const reducer = (state, action) => {
  switch (action) {
    case "addOne":
      return { firstCounter: state.firstCounter + 1 };
    case "addSix":
      return { firstCounter: state.firstCounter + 6 };
    case "decrement":
      return { firstCounter: state.firstCounter - 1 };
    case "reset":
      return initialState;
    default:
      return state;
  }
};

function ThirdExampleReducer() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h1>Example Number Three</h1>
      <h2>Current Status of count Is {count.firstCounter} </h2>
      <button onClick={() => dispatch("addOne")}>Add One</button>
      <button onClick={()=> dispatch ('addSix')} >Add Six</button>
      <button onClick={()=> dispatch ('decrement')} >Decrement</button>
      <button onClick={()=> dispatch ('reset')} >Reset</button>
      <h3>we have created the existing counter app by using <br />
      an Object as dada / initialState we are having same output <br />
      with same Functionality.</h3>    
    </div>

    
  );
}

export default ThirdExampleReducer;
