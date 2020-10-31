//where we will create context
import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

//set initial state
const initialState = {
  transactions: [
    //made this an empty array so you can add / subrtract whatever youd like to it
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

  //action to make call to reducer
  function deleteTransaction(id) {
    //takes in an id so we know which to delete
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id, //data we want to send to it which in this case is the I.D
    });
    //dispatching an action with a type and a payload
  }

  //making another action to add a transaction
  //action to make call to reducer
  function addTransaction(transaction) {
    //takes in an id so we know which to delete
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction, //data we want to send to it which in this case is the I.D
    });
    //dispatching an action with a type and a payload
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        //passing deletetranscation down so we can use it
        deleteTransaction,
        addTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
//we pass the provider an obj. using state. allows you to access anything in the obj. and we want to access the transactions here
//this allows us to access transaction from any component with useContext
