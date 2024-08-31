// src/components/ProductItem.js
import React from 'react';

function ProductItem({ product }) {
  return (
    <div className="product-item">
      <img src={product.image_url} alt={product.name} />
      <h3>{product.name}</h3>
      <p>${product.cost.toFixed(2)}</p>
    </div>
  );
}

export default ProductItem;