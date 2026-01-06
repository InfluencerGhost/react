import React, { useState, useRef, useEffect} from "react";

function stopwatch() {
    const timerIdRef = useRef(0)
    const [count, setCount] = useState(0)

    useEffect(()=>{
        console.log("COMPONENT RENDERED.")
    })

    function handleStart() {
       timerIdRef.current = setInterval(()=>{setCount(prevCount => prevCount + 1)}, 1000)
       console.log(timerIdRef.current)
    }

    function handleStop () {
        clearInterval(timerIdRef.current)
    }

    return (
        <>
            <p>{count}</p>
            <button onClick={handleStart}>Start</button>
            <button onClick={handleStop}>Stop</button>

         
        </>
    )


}

export default stopwatch;