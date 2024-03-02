import React from "react";
import "./app.css";
import CostList from "./components/CostsList";
import Form from "./components/Form";

function App() {
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
