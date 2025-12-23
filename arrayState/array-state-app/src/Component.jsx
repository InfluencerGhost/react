import { useState } from "react";

function Component() {
  const [food, setFood] = useState(["bread", "milk", "eggs"]);

  const addFood = () => {
    const foodInput = document.getElementById("foodInput").value;
    document.getElementById("foodInput").value = "";
    setFood(prevFood => [...prevFood, foodInput]);
  };

  const removeFood = (index) => {
    setFood(prevFood => prevFood.filter((_, i) => i !== index));
  };

  return (
    <div>
      <ul>
        {food.map((element, index) => (
          <li key={index} onClick={() => removeFood(index)}>
            {element.charAt(0).toUpperCase() + element.slice(1)}
          </li>
        ))}
      </ul>

      <input type="text" placeholder="Add food item" id="foodInput" />
      <button onClick={addFood}>Add Food</button>
    </div>
  );
}

export default Component;
