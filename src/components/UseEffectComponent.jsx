import React, { useState, useEffect } from "react";
import axios from "axios";
const UseEffectComponent = () => {
  const [users, setUsers] = useState([]);
  const [load, setLoad] = useState(false);
  useEffect(() => {
    setLoad(true);
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        console.log(response.data);
        setUsers(response.data);
        setLoad(false);
      })
      .catch((error) => {
        console.log(error);
        setLoad(false);
      });
  }, []);
  return (
    <div>
      <h1>useEffect()</h1>
      {load ? (
        <h3>Loading...</h3>
      ) : (
        users.map((user) => <li key={user.id}>{user.name}</li>)
      )}
    </div>
  );
};

export default UseEffectComponent;
