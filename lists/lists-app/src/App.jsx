import List from "./lists.jsx";

export default function App() {
  const fruits = [
    { id: 1, name: "Apple", calories: 100 },
    { id: 2, name: "Banana", calories: 50 },
    { id: 3, name: "Cherry", calories: 80 },
    { id: 4, name: "Banana", calories: 105 },
  ];

  const vegetables = [
    { id: 6, name: "Carrot", calories: 100 },
    { id: 7, name: "Broccoli", calories: 50 },
    { id: 8, name: "Spinach", calories: 80 },
    { id: 9, name: "Cabbage", calories: 105 },
  ];

  return (
    <>
      <List items={fruits} category="Fruits" />
        <List items={vegetables} category="Vegetables" />       
    </>
  );
}
