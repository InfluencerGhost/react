import React, { useState, createContext } from 'react';
import { userContext } from './componentA';


function ComponentD() {
    return(
        <>
        <div className='box'>
        <h1>Component D</h1>
        <h2>Bye {userContext}</h2>
        </div>
        </>
    )

}

export default ComponentD;