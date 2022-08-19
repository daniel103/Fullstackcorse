import React from "react";

const Product = ({ item, addProductToCart }) => {
  function handleAddToCartClick() {
    addProductToCart(item);
  }

  return (
    <div className="product-wrapper">
      <p className="product-name">{item.name}</p>
      <img className="product-image" src={item.image} alt={item.name} />
      <p className="product-price">{item.price}</p>
      <button onClick={handleAddToCartClick}>Add To Cart</button>
    </div>
  );
};

export default Product;
