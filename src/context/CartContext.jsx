import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    return JSON.parse(localStorage.getItem("cartItems")) || [];
  });

  const [cartItemsCount, setCartItemsCount] = useState(0);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    const totalCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
    setCartItemsCount(totalCount);
  }, [cartItems]);

  const addToCart = (product) => {
    const updatedCartItems = [...cartItems];
    const itemIndex = updatedCartItems.findIndex((item) => item.id === product.id);

    if (itemIndex !== -1) {
      updatedCartItems[itemIndex].quantity += 1;
    } else {
      updatedCartItems.push({ ...product, quantity: 1 });
    }
    setCartItems(updatedCartItems);
  };

  const updateCart = (newCartItems) => {
    setCartItems(newCartItems);
  };

  const clearCart = () => {
    setCartItems([])
  }

  return (
    <CartContext.Provider value={{ cartItems, updateCart, cartItemsCount, addToCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

