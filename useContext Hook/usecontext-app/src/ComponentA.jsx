import React, { useState, createContext } from 'react';
import ComponentB from "./ComponentB";

export const userContext = createContext();

function ComponentA() {

    const user = "Iyke";

    return (
        <>
            <div className='box'>

                <h1>Component A</h1>
                <h2>Hello {user}</h2>

                <userContext.Provider value={user}>
                    <ComponentB />
                </userContext.Provider>
                <ComponentB />
            </div>
        </>
    )

}

export default ComponentA;