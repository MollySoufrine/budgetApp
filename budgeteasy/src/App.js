import React from "react";
import { Header } from "./components/Header";
import { Balance } from "./components/Balance";
//using curly braces around the components to import them because they do not have an export default, we are using a const export
import "./App.css";
function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <Balance />
      </div>
    </div>
  );
}

export default App;
