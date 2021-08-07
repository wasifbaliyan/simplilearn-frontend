import React, { useState } from "react";

export default function Checkout({ course }) {
  const [clicked, setClicked] = useState(false);
  const [ordered, setOrdered] = useState(false);
  return (
    <div className="checkout">
      <h1>{course.title}</h1>
      {ordered && <p>Order placed successfully. Thanks for shopping with us</p>}
      {clicked ? (
        <div>
          <input type="number" placeholder="Enter otp" />
          <button onClick={() => setOrdered(true)}>Place order</button>
        </div>
      ) : (
        <div className="checkout__form">
          <input type="text" placeholder="Enter card number" />
          <input type="text" value={course.price} />
          <button onClick={() => setClicked(!clicked)}>Pay Now!</button>
        </div>
      )}
    </div>
  );
}
