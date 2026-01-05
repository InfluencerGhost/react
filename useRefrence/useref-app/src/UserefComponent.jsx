import React, {useState, useEffect, useRef} from 'react'

function UserefComponent() {

    const inputref = useRef(null)
    
    useEffect(()=> {
        console.log("Component Rendered")
    });

    function handleClick() {
        inputref.current.focus();

    }
return(
<>
<button onClick={handleClick} >Click Mee!!!</button>
<input />

</>
)
}

export default UserefComponent;