import { createContext, useReducer } from "react";

export const ContextState = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "addPerson":
      return [...state, action.data];

    case "editPerson":
      return [
        ...state.filter((person) => person.id !== action.data.id),
        action.data,
      ];
    
      case "deletePerson":
      return[...state.filter((person)=>person.id!==action.data.id)];
    
    
      default:
      return;
  }
};

export const ContextProvider = ({ children }) => {
  const [person, dispatch] = useReducer(reducer, []);

  return (
    <ContextState.Provider value={[person, dispatch]}>
      {children}
    </ContextState.Provider>
  );
};
