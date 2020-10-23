import React from "react";
import Form from "./Form";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="header-lmc">
        <div className="flex justify-between">
          <div className="logo-lmc">
            <img src="./img/lmc-logo.png" alt="Logo LMC"/>
          </div>
          <div className="title-lmc">
            <p className="title-p-lmc">
              Registro de equipos
            </p>
          </div>
        </div>
      </div>
      <Form />
    </div>
  );
}

export default App;
