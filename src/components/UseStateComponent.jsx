import React, { useState } from "react";

const UseStateComponent = () => {
  const [age, setAge] = useState(0);
  const handleAge = () => {
    setAge(age + 1);
  };
  return (
    <div>
      <button onClick={handleAge}>increase your age</button>
      <h1>now age is: {age}</h1>
    </div>
  );
};

export default UseStateComponent;
