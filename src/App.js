import React from "react";
import "./App.css";
import UseStateComponent from "./components/UseStateComponent";
import UseEffectComponent from "./components/UseEffectComponent";
import UseContextComponent from "./components/UseContextComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>react application to understand hooks</h1>
      </header>
      <UseStateComponent />
      <UseEffectComponent />
      <UseContextComponent />
    </div>
  );
}

export default App;
