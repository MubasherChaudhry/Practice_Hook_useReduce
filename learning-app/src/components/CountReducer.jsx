import React, { useState } from "react";

function CountReducer() {
  const [count, setCount] = useState(0);

  const addOne = () => {
    setCount((oldState) => oldState + 1);
  };
  const addSix = () => {
    setCount((oldState) => oldState + 6);
  };
  const minusOne = () => {
    setCount((oldState) => oldState - 1);
  };

  return (
    <div>
      <h1>Counter with the Help Of useState </h1>
      <h2>Current states of Count is {count} </h2>
      <h3>
        Please click on the buttons bellow to <br />
        trigger the Required Function{" "}
      </h3>

      <button onClick={addOne}>Add one</button>
      <button onClick={addSix}>Add Six</button>
      <button onClick={minusOne}>Minus one</button>
    </div>
  );
}

export default CountReducer;
