import React from "react";
//since transaction is a prop here we must pass in a prop to the function, we can destructure and use ({transaction}) or just use props and props.text
export const Transaction = (props) => {
  return (
    <li className="minus">
      {props.text}
      <span>-$400</span>
      <button className="delete-btn">x</button>
    </li>
  );
};
