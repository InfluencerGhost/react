import React from "react";

export default function MyComponent() {
    const [name, setName] = React.useState();
    function changeName(event) {
        setName(event.target.value);
    }

    return <div>
        <input value={name} onChange={changeName}/>
        Hello, {name}!
        </div>;
} 