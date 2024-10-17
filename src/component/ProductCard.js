import React from 'react';

const ProductCard = ({ product, addToCart }) => (
  <div className="product-card" role="region" aria-labelledby={`product-${product.id}`}>
    <img src={product.image} alt={product.name} />
    <h2 id={`product-${product.id}`}>{product.name}</h2>
    <p>{product.price}</p>
    <button 
      onClick={() => addToCart(product)} 
      aria-label={`Add ${product.name} to cart`}
    >
      Add to Cart
    </button>
  </div>
);

export default ProductCard;
