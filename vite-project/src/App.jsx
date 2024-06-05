import React, { useState } from 'react';
import './App.css'; // Import CSS for styling

// Product data
const products = [
  { id: 1, name: 'Product 1', description: 'Description 1', price: 10 },
  { id: 2, name: 'Product 2', description: 'Description 2', price: 20 },
  { id: 3, name: 'Product 3', description: 'Description 3', price: 30 },
];

// Product component
const Product = ({ product, addToCart, removeFromCart, inCart }) => {
  return (
    <div className="product">
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      {inCart ? (
        <button onClick={() => removeFromCart(product)}>Remove from Cart</button>
      ) : (
        <button onClick={() => addToCart(product)}>Add to Cart</button>
      )}
    </div>
  );
};

// Shopping cart component
const ShoppingCart = ({ cart, removeFromCart }) => {
  return (
    <div className="shopping-cart">
      <h2>Shopping Cart</h2>
      <p>Cart Quantity: {cart.length}</p>
      {cart.map(item => (
        <div key={item.id}>
          <h3>{item.name}</h3>
          <p>{item.description}</p>
          <button onClick={() => removeFromCart(item)}>Remove from Cart</button>
        </div>
      ))}
    </div>
  );
};

// Main App component
const App = () => {
  const [cart, setCart] = useState([]);

  // Function to add item to cart
  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  // Function to remove item from cart
  const removeFromCart = (productToRemove) => {
    setCart(cart.filter(item => item.id !== productToRemove.id));
  };

  return (
    <div className="container">
      <div className="product-list">
        <h1><center>Soorya Style</center></h1>
        <h2>Product List</h2>
        {products.map(product => (
          <Product
            key={product.id}
            product={product}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
            inCart={cart.some(item => item.id === product.id)}
          />
        ))}
      </div>
      <ShoppingCart cart={cart} removeFromCart={removeFromCart} />
    </div>
  );
};

export default App;
