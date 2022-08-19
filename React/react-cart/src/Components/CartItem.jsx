import React, { useState } from "react";

const CartItem = ({ item, deleteCartItem, addProductToCart }) => {

  let [count, setCount] = useState(0);

  function buttonplus () {
    addProductToCart(item)
  }

  function buttonminus (id) {
    count = item - 1;
    setCount(count);
  }


  return (
    <div className="single-cart-item">
      <p>{item.name}</p>
      <p>price: {item.price}</p>
      <p>quantity: <button onClick={buttonminus}>-</button>{item.quantity}<button onClick={buttonplus}>+</button></p>
      <button onClick={() => deleteCartItem(item.id)}>X</button>
    </div>
  );
};

export default CartItem;
