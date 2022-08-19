import { useState } from "react";
import Cart from "./Components/Cart";
import ProductList from "./Components/ProductList";
import "./App.css";
import { initialProducts } from "./Resources/data";

function App() {
  const [products, setProducts] = useState(initialProducts);
  const [cartItems, setCartItems] = useState([]);

  function addProductToCart(product) {
    const existItem = cartItems.find((item) => item.id === product.id);

    if (Boolean(existItem)) {
      let updateCartItem = { ...existItem };
      updateCartItem.quantity = updateCartItem.quantity + 1;
      updateCartItem.price = updateCartItem.price + product.price;
      let updateCartItems = [...cartItems];
      updateCartItems = updateCartItems.map((item) => {
        return item.id === updateCartItem.id ? updateCartItem : item;
      });
      setCartItems(updateCartItems);
    } else {
      let newCartItem = {
        id: product.id,
        name: product.name,
        price: product.price,
        quantity: 1,
      };
      const newCartItems = [...cartItems, newCartItem];
      setCartItems(newCartItems);
    }
  }

  return (
    <div className="App">
      <ProductList products={products} addProductToCart={addProductToCart} />
      <Cart cartItems={cartItems} setCartItems={setCartItems} addProductToCart={addProductToCart} />
    </div>
  );
}

export default App;
