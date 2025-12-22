import React, { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const resetCount = () => {
    setCount(0);
  };

  const decrementCount = () => {
    setCount(count - 1);
  };
  return (
    <>
      <div className="counter">
        <h1>Counter</h1>
        <p>{count}</p>
        <button onClick={incrementCount}>Increment</button>
        <button onClick={resetCount}>Reset</button>
        <button onClick={decrementCount}>Decrement</button>
      </div>
    </>
  );
}
