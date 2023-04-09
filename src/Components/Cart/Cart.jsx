import React from "react";

const Cart = ({ cartContainer, removeFromCartHandler }) => {
  console.log(cartContainer);
  return (
    <div>
      <h3>This is Cart container</h3>
      <h4>Order Summery: {cartContainer.length}</h4>

      {/* Getting item from an array, use map() */}
      {cartContainer.map((item) => (
        <p key={item._id}>
          {item.name} <button onClick={() => removeFromCartHandler(item._id)}>X</button>
        </p>
      ))}
    </div>
  );
};

export default Cart;
