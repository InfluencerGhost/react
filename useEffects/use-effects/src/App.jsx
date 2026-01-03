import { useState, useEffect } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [doubleCount, setDoubleCount] = useState(2)

  useEffect(() => {
    document.title = `You clicked ${count} times and ${doubleCount}`; 
  }, [count, doubleCount]);
  

  return (
    <>
    <button onClick={() => setCount(count + 1)}>
      Click me
    </button>

    <button onClick={() => setDoubleCount(doubleCount + 1)}>
      Click me 2
    </button>
    </>
  );
}
export default App;