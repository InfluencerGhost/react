import React from "react";

export default function MyComponent() {
  const [name, setName] = React.useState("Guest");
  const [quantity, setQuantity] = React.useState(1);
  const [comment, setComment] = React.useState("");
  const [paymentMethod, setPaymentMethod] = React.useState("creditCard");
  const [shipping, setShipping] = React.useState("Delivery");

  function changeName(e) {
    setName(e.target.value);
  }

  function changeQuantity(e) {
    setQuantity(e.target.value);
  }

  function changeComment(e) {
    setComment(e.target.value);
  }

  function changePaymentMethod(e) {
    setPaymentMethod(e.target.value);
  }

  function changeShipping(e) {
    setShipping(e.target.value);
  }

  return (
    <div>
      <label>Name: </label>
      <input value={name} onChange={(e) => changeName(e)} />
      <p>Hello, {name}!</p>

      <label>Quantity: </label>
      <input
        type="number"
        value={quantity}
        onChange={(e) => changeQuantity(e)}
      />
      <p>You have {quantity} items.</p>

      <label>Comment: </label>
      <textarea
        placeholder="Enter your comment here"
        value={comment}
        onChange={(e) => changeComment(e)}
      />
      <p>Your comment: {comment}</p>

      <select value={paymentMethod} onChange={(e) => changePaymentMethod(e)}>
        <option value="none">Select Payment Method</option>
        <option value="creditCard">Credit Card</option>
        <option value="paypal">PayPal</option>
        <option value="bitcoin">Bitcoin</option>
      </select>
      <p>Selected Payment Method: {paymentMethod}</p>

      <label>
        {" "}
        <input
          type="radio"
          value="Delivery"
          checked={shipping === "Delivery"}
          onChange={(e) => changeShipping(e)}
        />{" "}
        Delivery
      </label>

      <label>
        {" "}
        <input
          type="radio"
          value="Pick up"
          checked={shipping === "Pick up"}
          onChange={(e) => changeShipping(e)}
        />{" "}
        Pickup
      </label>

      <p>Shipping Method: {shipping}</p>
    </div>
  );
}
