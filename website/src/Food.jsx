function Food() {
  const food1 = "Banana";
  const food2 = "orange";

  return (
    <ul>
      <li>  pple</li>
      <li>{food1.charAt(0).toUpperCase() + food1.slice(1)}</li>
      <li>{food2.charAt(0).toUpperCase() + food2.slice(1)}</li>
    </ul>
  );
}

export default Food;
