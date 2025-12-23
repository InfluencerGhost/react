import React, { useState } from "react";

function Component() {
  const [car, setCar] = useState({
    brand: "Toyota",
    model: "Corolla",
    year: 2020
  })

  function updateYear(e) {
    setCar(prevCar => {
      return { ...prevCar, year: e.target.value }
    })
  }

  function updateBrand(e) {
    setCar(prevCar => {
      return { ...prevCar, brand: e.target.value }
    })
  }

  function updateModel(e) {
    setCar(prevCar => {
      return { ...prevCar, model: e.target.value }
    })
  }

  return(
    <>
    <h2> Your favorite car is a {car.year} {car.brand} {car.model} </h2>
    <input type="number" value={car.year} onChange={updateYear}/>
    <input type="text" value={car.brand} onChange={updateBrand}/>
    <input type="text" value={car.model} onChange={updateModel}/>
    </>
  )
}

export default Component;