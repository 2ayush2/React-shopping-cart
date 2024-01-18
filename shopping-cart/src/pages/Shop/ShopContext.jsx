import React, { createContext, useContext, useState } from "react";
import { PRODUCTS } from "../../Product";

export const ShopContext = createContext(undefined);

export const ShopContextProvider = (props) => {
  const idValue = () => {
    let cart = {};
    for (let i = 1; i < PRODUCTS.length + 1; i++) {
      cart[i] = 0;
    }
    return cart;
  };
  const [value, setValue] = useState(idValue);
  const addCart = (idno) => {
    setValue((prev) => ({ ...prev, [idno]: prev[idno] + 1 }));
  };
  const deleteCart = (idno) => {
    setValue((prev) => ({ ...prev, [idno]: prev[idno] - 1 }));
  };
  const contextValue = { addCart, deleteCart, value };
  return (
    <>
      <ShopContext.Provider value={contextValue}>
        {props.children}{" "}
      </ShopContext.Provider>
    </>
  );
};
