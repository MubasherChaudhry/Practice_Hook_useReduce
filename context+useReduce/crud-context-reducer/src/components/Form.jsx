import React, { useContext, useState } from "react";
import { ContextState } from "../globals/Context_1";
const Form = () => {
  const [person, dispatch] = useContext(ContextState);

  const [state, setState] = useState({
    id: null,
    fName: "",
    lName: "",
    age: "",
    email: "",
  });

  const addPerson = (e) => {
    e.preventDefault()
    const {fName,lName,age,email}=state
    if(fName===''|| lName===''|| age===''|| email===''){
      alert('Some input className="mb-3" are empty!!')
      return
    }
    dispatch({
      type:'addPerson',
      data:{id:person.length+1, fName,lName,age,email}
    })
    setState({
      fName: "",
      lName: "",
      age: "",
      email: ""
    })
  };
  
  const startEdit= (id)=>{
    setState(person.find((per)=>per.id===id))
  }
  
  const editPerson = (e) => {
    e.preventDefault()
    const {fName,lName,age,email}=state
    dispatch({
      type:'editPerson',
      data:{id:state.id,fName,lName,age,email},
    })
  };

  const deletePerson= (id)=>{
    dispatch({
      type:'deletePerson',
      data:{id}
    })
  }

  return (
    <>
      <form>
        <div>
          <div>
          <input className="mb-3"
            type="text"
            placeholder="First Name"
            name="fName"
            value={state.fName}
            onChange={(e) => setState({ ...state, fName: e.target.value })}
          />
          </div>

          <div>
          <input className="mb-3"
            type="text"
            placeholder="Last Name"
            name="lName"
            value={state.lName}
            onChange={(e) => setState({ ...state, lName: e.target.value })}
          />
          </div>
          <div>
          <input className="mb-3"
            type="number"
            placeholder="Age"
            name="age"
            value={state.age}
            onChange={(e) => setState({ ...state, age: e.target.value })}
          />
          </div>
          <div>
          <input className="mb-3"
            type="email"
            placeholder=" E-mail"
            name="email"
            value={state.email}
            onChange={(e) => setState({ ...state, email: e.target.value })}
          />
          </div>

          <button className="btn btn-success"  onClick={state.id ? editPerson : addPerson}>
            {state.id ? "Save" : "Add"}
          </button>
        </div>
      </form>
      <table className='table table-bordered' >
        <tr>
          <th>ID</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Age</th>
          <th>e-mail</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
        {person.length > 0
          ? person.map((onePerson) => {
              return (
                <tr>
                  <td>{onePerson.id} </td>
                  <td>{onePerson.fName}</td>
                  <td>{onePerson.lName}</td>
                  <td>{onePerson.age}</td>
                  <td>{onePerson.email}</td>
                  <td><button className='btn btn-primary btn-lg'  onClick={()=> startEdit(onePerson.id)} >Edit</button></td>
                  <td><button className='btn btn-danger me-md-2' onClick={()=>deletePerson(onePerson.id)} >Delete</button> </td>
                </tr>
              );
            })
          : 
          <tr>
            <td></td>
            <td></td>
            <td></td>
            </tr>
            }
      </table>
    </>
  );
};

export default Form;
