import React from 'react';
import ProductCard from './ProductCard';

const ProductGallery = ({ products, addToCart }) => (
  <div className="Apple card" style={galleryStyles}>
    {products.map((product) => (
      <ProductCard key={product.id} product={product} addToCart={addToCart} />
    ))}
  </div>
);

const galleryStyles = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-around',
  gap: '20px'
};



export default ProductGallery;
