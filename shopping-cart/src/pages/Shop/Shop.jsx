import React from "react";
import { PRODUCTS } from "../../Product";
import { Product } from "./Product";
import "./shop.css";

export const Shop = () => {
  return (
    <div className="product-items">
      {PRODUCTS.map((product) => (
        <Product data={product} />
      ))}
    </div>
  );
};
