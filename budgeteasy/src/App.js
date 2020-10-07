import React, { Component } from "react";
import expenses from "./expenses.json";
import { Button, Container } from "reactstrap";

class App extends Component {
  state = {
    expenses,
  };
  calcExpenses = (id) => {
    const expenses = this.state.expenses.reduce((expense) => expense.id !== id);
    this.setState({ expenses });
  };
  render() {
    return (
      <Container className="text-center">
        <Jumbotron fluid></Jumbotron>
      </Container>
    );
  }
}

export default App;
