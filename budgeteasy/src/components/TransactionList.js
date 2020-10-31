import React, { useContext } from "react";
import { Transaction } from "./Transaction";
import { GlobalContext } from "../context/GlobalState";
export const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);
  return (
    <>
      <h3>History</h3>
      <ul id="list" className="list">
        {transactions.map((transaction) => (
          //loop/mapping through transactions because its an array
          <Transaction key={transaction.id} transaction={transaction} />
          //bringing it in from globalstate/context mapping through, rendering a transaction component for each one and pass in a prop. must have a unique key.
        ))}
      </ul>
    </>
  );
};
//bringing it in from globalcontext, map through, then render a component for each and pass in a prop
//mapping through this way, creates or is called a list and must have a unique key
