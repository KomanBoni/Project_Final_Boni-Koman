import React, { useState } from 'react';
import ProductGallery from './component/ProductGallery';
import ShoppingCart from './component/ShoppingCart';
import './App.css';


const App = () => {
  const [cartItems, setCartItems] = useState([]);

    const products = [
      { id: 1, name: 'Casque Audio Apple : ', price: '559€', image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSAhAt_rYr7D3La0lMqpHRTD0mXWKpjHwAiHYRQp9w30DR0qzV5NEULr_6lsXcIJMk1xxIUa-94Isez2fY8kv9-3xqJ5coC4if0jIaA0C6Sx0SG5RwIhGBT&usqp=CAc' },
      { id: 2, name: 'Iphone 16 : ', price: '899.99€', image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTl_e8CfclhgGPa45VJ64WkRbufQE9nB06_zTMutUlaShdlTfhwwFVeo-Rx5LMwY4G2WStRoKe5bz8H5pl8kk_wpMtfEseFyDR3kHPjoH_qu5p0eNaDHmk-DEf2pjqE_Wf_&usqp=CAc' },
      { id: 3, name: 'MacBook : ', price: '1069€', image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSdlPRh3lM3DTqtbNIS9U0Qpd5L4_CrHq0hu4u4OPxwXFXYFZ4Zxy2Mgffbm6tRIaoGaEr0NeJUAwxDhEFKM0lJCkoNCE_nkI36Bp0jEpRqMGyV1EED7KJQKEAxa6r3IEeCUFOYVsw_UQ&usqp=CAc' },
      { id: 4, name: 'Apple Watch : ', price: '300€', image: 'https://www.apple.com/newsroom/images/product/watch/standard/Apple_watch-experience-for-entire-family-hero_09152020_big.jpg.large.jpg' }
    ];
  

  const addToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
  };

  return (
    <div className="app">
      <h1>Apple Product</h1>
      <ProductGallery products={products} addToCart={addToCart} />
      <ShoppingCart cartItems={cartItems} />
    </div>
  );
};

export default App;
