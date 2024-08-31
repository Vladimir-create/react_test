// src/components/Filter.js
import React from 'react';

function Filter({ onFilter }) {
  return (
    <div className="filter">
      <select onChange={(e) => onFilter(e.target.value)}>
        <option value="">All</option>
        <option value="hoodie">Hoodie</option>
        <option value="t-shirt">T-Shirt</option>
        <option value="jacket">Jacket</option>
        <option value="shorts">Shorts</option>
      </select>
    </div>
  );
}

export default Filter;