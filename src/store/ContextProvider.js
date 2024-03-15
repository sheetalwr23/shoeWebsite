import React, { useState } from "react";
import CartContext from "./CartContext";

const ContextProvider = (props) => {
  const [items, setItems] = useState([]);

  const addItemHandler = (item) => {
    setItems([...items, item]);
  };

  const cartContext = {
    items: items,
    addItem: addItemHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default ContextProvider;
