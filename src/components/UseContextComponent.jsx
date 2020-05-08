import React, { useContext } from "react";
const colors = {
  blue: "#03619c",
  yellow: "#8c8f03",
  red: "#9c0312",
};
const ColorContext = React.createContext(colors);
const UseContextComponent = () => {
  const colors = useContext(ColorContext);
  return (
    <div>
      <h1>useContext()</h1>
      <p style={{ color: colors.blue }}>blue</p>
      <p style={{ color: colors.yellow }}>yellow</p>
      <p style={{ color: colors.red }}>red</p>
    </div>
  );
};
export default UseContextComponent;
