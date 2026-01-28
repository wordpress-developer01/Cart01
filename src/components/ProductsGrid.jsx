import React from "react";
import { Products } from "./Products"; // карточка одного товара

const ProductsGrid = ({ products, onAdd }) => {
  return (
    <div className="products">
      {products.map((p) => (
        <Products
          key={p.id}
          product={p}
          onAdd={onAdd}
        />
      ))}
    </div>
  );
};

export default ProductsGrid;
