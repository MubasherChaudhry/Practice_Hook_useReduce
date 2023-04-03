import React, { useState } from "react";



const Form = () => {

  const [state, setstate] = useState({
  id: null,
  fName: "",
  lName: "",
  age: "",
  email: "",
});


const editPerson=()=>{}

const addPerson=()=>{}

  return ( <form>
    <div>
      <input
        type="text"
        placeholder="First Name"
        name="fName"
        value={state.fName}
        onChange={(e)=>({...state, fName: e.target.value})} 
      />

      <input
        type="text"
        placeholder="Last Name"
        name="lName"
        value={state.lName}
        onChange={(e)=>({...state, lName: e.target.value})} 
      />

      <input type="number"
      placeholder="Age"
      name="age"
      value={state.age} 
      onChange={(e)=>({...state, age: e.target.value})} />

      <input
        type="email"
        placeholder=" E-mail"
        name="email"
        value={state.email}
        onChange={(e)=>({...state, email:e.target.value})} 
      />

      <button onClick={state.id ? editPerson : addPerson }>{state.id ? 'Save' : 'Add' }</button>


    </div>
    </form>
  );
};

export default Form;
