import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => (
  <div style={{ border: '1px solid #ccc', padding: '1rem' }}>
    <img src={product.thumbnail} alt={product.title} width="100" />
    <h4>{product.title}</h4>
    <p>₹{product.price}</p>
    <Link to={`/product/${product.id}`}>View Details</Link>
  </div>
);

export default ProductCard;
