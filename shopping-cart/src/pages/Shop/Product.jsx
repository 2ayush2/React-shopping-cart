import React, { useContext } from "react";
import "./product.css";
import { ShopContext } from "./ShopContext";

export const Product = ({ data }) => {
  const { id, productName, price, productImage } = data;
  const { addCart, value } = useContext(ShopContext);
  const cartValue = value[id];
  return (
    <div className="itemList">
      <img src={productImage} alt="" />
      <div className="product-description">
        <h1>{productName}</h1>
        <p>${price}</p>
      </div>
      <button onClick={() => addCart(id)}>
        Add to cart{<>({cartValue})</>}
      </button>
    </div>
  );
};
