import React, { useReducer } from "react";
const initialState = {
  count: 0,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + action.value };
    case "decrement":
      return { ...state, count: state.count - action.value };
    case "reset":
      return initialState;
    default:
      return state;
  }
};

const UseReducerComponent = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>useReducer()</h1>
      <button onClick={() => dispatch({ type: "increment", value: 1 })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: "decrement", value: 1 })}>
        Decrement
      </button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
      <div>Count = {state.count}</div>
    </div>
  );
};

export default UseReducerComponent;
