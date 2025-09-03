import React from 'react';
import './CartSection.css';

const products = [
  { id: 1, name: 'Men T-Shirt', category: 'Men' },
  { id: 2, name: 'Women Kurti', category: 'Women' },
  { id: 3, name: 'Kids Frock', category: 'Kids' },
  { id: 4, name: 'Men Jeans', category: 'Men' },
  { id: 5, name: 'Women Skirt', category: 'Women' },
];

const CartSection = ({ selectedCategory }) => {
  const filtered = selectedCategory
    ? products.filter(p => p.category === selectedCategory)
    : products;

  return (
    <div className="cart-section" id="cart">
      <h2>{selectedCategory || 'All'} Products</h2>
      <div className="product-grid">
        {filtered.map(product => (
          <div key={product.id} className="product-card">
            <h4>{product.name}</h4>
            <p>Category: {product.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CartSection;