import React, { useState } from "react";
function Component() {
  const [car, setCar] = useState([]);
  const [carYear, setCarYear] = useState(new Date().getFullYear());
  const [carModel, setCarModel] = useState("");
  const [carMake, setCarMake] = useState("");
  const [carColor, setCarColor] = useState("");

  function handleAddCar() {}

  function handleRemoveCar() {}

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
      <ul></ul>
      <input type="number" value={carYear} onChange={handleUpdateCarYear} />
      <br />
      <input
        type="text"
        placeholder="Enter Car Model..."
        value={carModel}
        onChange={handleUpdateCarModel}
      />
      <br />
      <input
        type="text"
        placeholder="Enter Car Make..."
        value={carMake}
        onChange={handleUpdateCarMake}
      />
      <br />
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
