import React from "react";
import "./App.css";
import UseStateComponent from "./components/UseStateComponent";
import UseEffectComponent from "./components/UseEffectComponent";
import UseContextComponent from "./components/UseContextComponent";
import UseReducerComponent from "./components/UseReducerComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>react application to understand hooks</h1>
      </header>
      <UseStateComponent />
      <UseEffectComponent />
      <UseContextComponent />
      <UseReducerComponent />
    </div>
  );
}

export default App;
