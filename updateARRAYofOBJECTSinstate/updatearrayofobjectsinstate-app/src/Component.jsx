import React, { useState } from "react";
function Component() {
  const [car, setCar] = useState([]);
  const [carYear, setCarYear] = useState(new Date().getFullYear());
  const [carModel, setCarModel] = useState("");
  const [carMake, setCarMake] = useState("");
  const [carColor, setCarColor] = useState("");

  function handleAddCar() {
    const newCar = { make: carMake, model: carModel, year: carYear, color: carColor };
    setCar(prevCar => [...prevCar, newCar]);

    setCarYear(new Date().getFullYear());
    setCarModel("");
    setCarColor("");
    setCarMake("");
  }

  function handleRemoveCar(i) {
    setCar(prevCar => prevCar.filter((_, index) => index !== i));
  }

  function handleUpdateCarYear(event) {
    setCarYear(event.target.value);
  }

  function handleUpdateCarModel(event) {
    setCarModel(event.target.value);
  }

  function handleUpdateCarMake(event) {
    setCarMake(event.target.value);
  }

  function handleUpdateCarColor(event) {
    setCarColor(event.target.value);
  }

  return (
    <div>
      <h2>List of Car Objects</h2>
      <ul>
        {car.map((element, index) =>
          <li key={index} onClick={() => handleRemoveCar(index)}> {element.year} {element.color} {element.model} {element.make} </li>
        )}
      </ul>
      <label>Year: </label>
      <input type="number" value={carYear} onChange={handleUpdateCarYear} />
      <br />
      <label>Model: </label>
      <input
        type="text"
        placeholder="Enter Car Model..."
        value={carModel}
        onChange={handleUpdateCarModel}
      />
      <br />
      <label>Make: </label>
      <input
        type="text"
        placeholder="Enter Car Make..."
        value={carMake}
        onChange={handleUpdateCarMake}
      />
      <br />
      <label>Color: </label>
      <input
        type="text"
        placeholder="Enter Car Color..."
        value={carColor}
        onChange={handleUpdateCarColor}
      />
      <br />
      <button onClick={handleAddCar}>Add Car</button>
    </div>
  );
}

export default Component;
