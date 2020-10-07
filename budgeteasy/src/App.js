import React, { useState } from "react";
import { Jumbotron, Container } from "reactstrap";
import Form from "./components/Form";

const ALL_EXPENSES = [
  { id: 1, name: "Buy a book", amount: 20 },
  { id: 2, name: "Buy a milk", amount: 5 },
  { id: 3, name: "Book a flight ticket", amount: 225 },
];

function App() {
  const [expenses, setExpenses] = useState(ALL_EXPENSES);

  return (
    <Container className="text-center">
      <Jumbotron fluid>
        <h3 className="display-6">Expense Tracker React App</h3>
        <div>
          <p>
            Total Expense:{" "}
            <span className="text-success">
              ${" "}
              {expenses.reduce((accumulator, currentValue) => {
                return (accumulator += parseInt(currentValue.amount));
              }, 0)}
            </span>
          </p>
        </div>
      </Jumbotron>
    </Container>
  );
}

export default App;
//the reduce method will execute a function to output a single value form all of the indv values in the array
//we calc the total sum of the amount of ALL_EXPENSES. this callback takes two args.
//the first is accumulator and it returns a val of the previous invocation
