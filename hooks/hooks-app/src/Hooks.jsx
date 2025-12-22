import React, { useState } from "react";

export default function Hooks() {
  const [name, setName] = useState("Human");
  const updateName = () => {
    setName("Iyke");
  };

  const [age, setAge] = useState(0);
  const incrementAge = () => {
    setAge(age + 1);
  };

  const [isEmployed, setIsEmployed] = useState(false);
  const updateIsEmployed = () => {
    setIsEmployed(!isEmployed); 
  };

  return (
    <>
      <div>
        <p>Name: {name}</p>
        <p>Age: {age}</p>
        <p>Is Employed: {isEmployed ? "Yes" : "No"}</p>

        <button onClick={updateName}>Set name</button>
        <button onClick={incrementAge}>Increment age</button>
        <button onClick={updateIsEmployed}>Toggle employment status</button>
      </div>
    </>
  );
}
