import React, { useState, useEffect, useRef } from "react";

function Stopwatch() {
    const [isRunning, setIsRunning] = useState(false);
    const [elapsedTime, setElapsedTime] = useState(0);
    const intervalIdRef = useRef(0);
    const startTime = useRef(0)

    useEffect(() => {
        if (isRunning) {
            intervalIdRef.current = setInterval(() => {
                setElapsedTime(Date.now() - startTime.current)
            }, 10)
        }

        return () => {
            clearInterval(intervalIdRef.current)
        }

    }, [isRunning]);

    function start() {
        setIsRunning(true)
        startTime.current = Date.now() - elapsedTime;


    }

    function stop() {
        setIsRunning(false);

    }

    function reset() {
        setIsRunning(false);
        setElapsedTime(0)
    }

    function formatDisplay() {

        let minutes = Math.floor(elapsedTime / (1000 * 60) % 60);
        let seconds = Math.floor(elapsedTime / (1000) % 60);
        let milliseconds = Math.floor(elapsedTime % 1000 / 10)

        minutes = String(minutes).padStart(2, '0')
        seconds = String(seconds).padStart(2, '0')
        milliseconds = String(milliseconds).padStart(2, '0')

        return `${minutes}:${seconds}:${milliseconds}`

    }


    return (
        <>
            <div className="stopwatch-container">
                <div className="display">{formatDisplay()}</div>
                <div className="controls">
                    <button className="start-btn" onClick={start}>Start</button>
                    <button className="stop-btn" onClick={stop}>Stop</button>
                    <button className="reset-btn" onClick={reset}>Reset</button>
                </div>
            </div>
        </>
    )

}

export default Stopwatch;