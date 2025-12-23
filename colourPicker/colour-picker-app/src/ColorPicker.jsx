import React from "react";
export default function ColorPicker() {
  const [color, setColor] = React.useState("#FFFFFF");
  function changeColor(e) {
    setColor(e.target.value);
  }

  return (
    <div className="color-picker-container">
      <p
        className="color-display"
        style={{
          backgroundColor: color,
          color:
            parseInt(color.slice(1), 16) > 0x808080 ? "#000000" : "#ffffffff",
        }}
      >
        You selected {color.toUpperCase()}
      </p>
      <h2>Select Your Color</h2>
      <input
        className="color-picker"
        type="color"
        value={color}
        onChange={changeColor}
      />
    </div>
  );
}
