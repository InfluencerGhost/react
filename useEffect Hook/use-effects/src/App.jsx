import { useState, useEffect, use } from 'react';

function App() {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    console.log("Event Listener Added")

    return () => {
      window.addEventListener('resize', handleResize);
      console.log("Event Listener removed")

    }
  }, [])

  function handleResize() {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }

  return (
    <>
      <p>Window Width: {width}px</p>
      <p>Window Height: {height}px</p>
    </>
  );
}
export default App;