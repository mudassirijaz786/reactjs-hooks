import React, { useState } from "react";

const UseStateComponent = () => {
  const [age, setAge] = useState(0);
  const handleAge = () => {
    setAge(age + 1);
  };
  return (
    <div>
      <h1>useState()</h1>
      <button onClick={handleAge}>increase your age</button>
      <h6>now age is: {age}</h6>
    </div>
  );
};

export default UseStateComponent;
