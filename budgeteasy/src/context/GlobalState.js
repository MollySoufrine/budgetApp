//where we will create context
import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

//set initial state
const initialState = {
  transactions: [
    { id: 1, text: "Flower", amount: -20 },
    { id: 2, text: "Salary", amount: 300 },
    { id: 3, text: "Book", amount: -10 },
    { id: 4, text: "Camera", amount: 150 },
  ],
  //exp is negative num, inc is pos number
};

/*
any global state will go in that obj above.
as long as we have access to the transactions in certain components we can do our calculations
we just need to pass the data down then we will have actions to delete/add from/to the state
*/

//create context
export const GlobalContext = createContext(initialState);
// in order for other components to have access to our state we need a provider

//Provoder component
//we want our components wrapped in a provider, this makes them children, so we destrcuture and pass in children
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  //passing reducer into useReducer, accessing state values and passing it into our provdier
  //using reducer we want state and dispatch
  return (
    <GlobalContext.Provider value={{ transactions: state.transactions }}>
      {children}
    </GlobalContext.Provider>
  );
};
//we pass the provider an obj. using state. allows you to access anything in the obj. and we want to access the transactions here
//this allows us to access transaction from any component with useContext
