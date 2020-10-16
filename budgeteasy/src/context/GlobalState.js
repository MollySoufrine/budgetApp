//where we will create context
import React, { createContext, useReducer } from "react";

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

//any global state will go in that obj above.

//as long as we have access to the transactions in certain components we can do our calculations
//we just need to pass the data down then we will have actions to delete/add from/to the state
