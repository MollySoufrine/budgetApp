import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

//since transaction is a prop here we must pass in a prop to the function, we can destructure and use ({transaction}) or just use props and props.text
export const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);

  const sign = transaction.amount < 0 ? "-" : "+";
  //ternary op to detect if amount is less than 0 its negative/exp, otherwise its pos and an inc
  return (
    //going to make the className dynamic
    //ternary op again, if we have a class of minus, the border will be red, else if its pos the border is green
    <li className={transaction.amount < 0 ? "minus" : "plus"}>
      {transaction.text}
      <span>
        {sign}${Math.abs(transaction.amount)}
        {/* this is wrapped in math.abs so that two negative signs do not show up */}
      </span>
      <button
        onClick={() => deleteTransaction(transaction.id)}
        className="delete-btn"
      >
        x
      </button>
    </li>
  );
};
//we need to write a function to recognize the sign + or -
