export default function Button({ text = "Click Me" }) {
  const handleClick = (e) => {
    e.target.textContent = "Clicked!";
  };

  return (
    <>
      <button className="btn" onClick={(e) => handleClick(e)}>
        {text}
      </button>
      <br></br>
    </>
  );
}
