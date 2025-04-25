"use client";

import { createContext, useState, useContext } from "react";

const CartItemsContext = createContext();

export const useCartItemsState = () => {
  return useContext(CartItemsContext);
};

export const CartItemsProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  return (
    <CartItemsContext.Provider value={{ cartItems, setCartItems }}>
      {children}
    </CartItemsContext.Provider>
  );
};
