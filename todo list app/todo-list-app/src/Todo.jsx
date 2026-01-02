import React, { useState } from "react";

function Todo() {
    const [list, setList] = useState([]);

    function handleListUpdate() {
        const newList = document.querySelector('.todo-input').value;
        if (newList !== "") {
            setList(prevList => [...prevList, newList]);
            document.querySelector('.todo-input').value = '';
        }

    }
    function handleDelete(i) {
        setList(prevList => prevList.filter((_, index) => index !== i));

    }

    function moveUp(index) {
        if (index > 0) {

            const updatedArray = [...list];
            [updatedArray[index-1], updatedArray[index]] = [updatedArray[index], updatedArray[index-1]];
            setList(updatedArray)
        }


    }
    function moveDown(index) {
          if (index < list.length - 1) {

            const updatedArray = [...list];
            [updatedArray[index+1], updatedArray[index]] = [updatedArray[index], updatedArray[index+1]];
            setList(updatedArray)
          }
    }

    return (
        <>
            <h1>Todo List</h1>
            <input type="text" className="todo-input" placeholder="Enter a task" /> <button className="todo-add-btn" onClick={handleListUpdate}>Add</button>

            {list.map((element, index) =>
                <>
                    <div className="todo-item">
                        <p className="todo-item-text" key={index}>{element}</p>
                        <button className="delete-btn" onClick={() => handleDelete(index)}>Delete</button>
                        <button onClick={() => moveUp(index)} className="up-down-btn">👆</button>
                        <button onClick={() => moveDown(index)} className="up-down-btn">👇</button>
                    </div>
                </>
            )}



        </>
    );
}

export default Todo;