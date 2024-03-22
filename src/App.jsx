//Developers:
//first_name:  Oshri  | last_name: Moalem  | id:   316125277
//first_name: Elinor | last_name: Zalogin | id:   208324863

import React from "react";
import "./app.css";
import CostList from "./components/CostsList";
import Form from "./components/Form";

function App() {
  // Define the App component
  return (
    <div className="wrapper">
      <div className="card">
        <h1 className="card__title">Cost Manager App</h1>
        <Form />
        <CostList />
      </div>
    </div>
  );
}

export default App;
