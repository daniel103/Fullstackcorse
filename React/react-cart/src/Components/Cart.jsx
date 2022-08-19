import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import CartItem from "./CartItem";

const Cart = ({ cartItems, setCartItems, addProductToCart }) => {
  const [cartTotal, setCartTotal] = useState(0);

  function sumCartItems() {
    let total = 0;
    cartItems.forEach((item) => {
      total = total + item.price;
    });
    setCartTotal(total);
  }

  function deleteCartItem(id) {
    let filteredCartItems = [...cartItems];
    filteredCartItems = filteredCartItems.filter((item) => item.id !== id);
    setCartItems(filteredCartItems);
  }

  useEffect(() => {
    sumCartItems();
  }, [cartItems]);

  function clearCart() {
    setCartItems([]);
  }

  return (
    <Box className="box-wrapper">
      <Paper className="paper-wrapper">
        <h3 className="product-list-header">
          My Cart <span className="cart-total">Total: {cartTotal}</span>
          <button onClick={clearCart}>Clear Cart</button>
        </h3>
        <div className="cart-items-wrapper">
          {cartItems.map((cartItem) => (
            <CartItem
              key={cartItem.id}
              item={cartItem}
              addProductToCart={addProductToCart}
              deleteCartItem={deleteCartItem}
            />
          ))}
        </div>
      </Paper>
    </Box>
  );
};

export default Cart;
