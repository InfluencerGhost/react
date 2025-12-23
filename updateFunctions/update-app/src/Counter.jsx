import React from "react";

export default function Counter() {
  const [count, setCount] = React.useState(0);

  function increment() {
    setCount((c) => c + 1);
  }

  function reset() {
    setCount(0);
  }

  function decrement() {
    setCount((c) => c - 1);
    setCount((c) => c - 3);
  }

  return (
    <div>
      <h1>Counter</h1>
      <p>{count}</p>
      <button onClick={() => increment()}>Increment</button>
      <button onClick={() => reset()}>Reset</button>
      <button onClick={() => decrement()}>Decrement</button>
    </div>
  );
}
