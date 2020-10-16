import React, { useState } from "react";
export const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  return (
    <>
      <h3>Add a New Transaction!</h3>
      <form id="form">
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            value={text}
            onChagne={(e) => setText(e.target.value)}
            id="text"
            placeholder="Enter Text Here"
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount
            <br />
            (negative- expense, positive - income
          </label>
          <input
            type="number"
            value={amount}
            onChagne={(e) => setAmount(e.target.value)}
            id="amount"
            placeholder="Enter Amount"
          />
        </div>
        <button className="btn">Add Transaction</button>
      </form>
    </>
  );
};
