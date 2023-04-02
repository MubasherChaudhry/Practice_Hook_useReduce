import React,{useReducer} from 'react'


const initialState = "Margo";
const initialStateTwo = "Mobi";
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

const SeventhExample = () => {
  const [count, dispatch] = useReducer(reducer, initialState);
  const [countTwo, dispatchTwo] = useReducer(reducer, initialStateTwo);
  return (
    <div>
        <h1>Using Different useReducer in one App</h1>
      <h3> First value with First Reducer is: {count}</h3>
      <h3>Second Value with second Reducer is: {countTwo}</h3>
      <p>
        We are using here different buttons <br /> that gonna trigger different
        useReducer
      </p>

      <button onClick={() => dispatch({ type: "addName1", value: "Mobi" })}>
        Name 1 with reducer 1
      </button>
      <button onClick={() => dispatchTwo({ type: "addName1", value: "Margo" })}>
        Name 1 with reducer 2
      </button>
      <button onClick={() => dispatch({ type: "addName1", value: "Matt" })}>
        Name 2 with reducer 1
      </button>
      <button onClick={() => dispatchTwo({ type: "addName1", value: "Marg" })}>
        Name 2 with reducer 2
      </button>
      <button onClick={() => dispatch({ type: "reset" })}>
        Reset with reducer 1
      </button>
      <button onClick={() => dispatchTwo({ type: "reset" })}>
        Reset with Reducer 2
      </button>
      <p>in this example we can see different buttons triggered different functions <br />
      without effecting other function. So its a batter way to organize the data for <br />
       For Example we can use one reducer of numbers and other one for strings in same components <br />
       it will be helpful when ever we want to modify ap or component later.
      </p>
    </div>
  )
}

export default SeventhExample
