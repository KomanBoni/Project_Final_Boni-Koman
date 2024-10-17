
import React from 'react';

const ShoppingCart = ({ cartItems }) => {

  const totalPrice = cartItems.reduce((total, item) => {
    const price = parseFloat(item.price.replace('€', '').replace(',', '.'));
    return total + price;
  }, 0);

  
  const groupedItems = cartItems.reduce((acc, item) => {
    const existingItem = acc.find((i) => i.id === item.id);
    if (existingItem) {
      existingItem.quantity += 1; 
    } else {
      acc.push({ ...item, quantity: 1 }); 
    }
    return acc;
  }, []);

  return (
    <div className="shopping-cart">
      <h2>Votre panier</h2>
      {groupedItems.length === 0 ? (
        <p>Achat</p>
      ) : (
        <>
          <ul>
            {groupedItems.map((item) => (
              <li key={item.id}>
                <span>{item.name} (x{item.quantity})</span>
                <span>{(parseFloat(item.price.replace('€', '').replace(',', '.')) * item.quantity).toFixed(2).replace('.', ',')}€</span>
              </li>
            ))}
          </ul>
          <div className="total">
            <h3>Le total du panier es de : {totalPrice.toFixed(2).replace('.', ',')}€</h3>
          </div>
        </>
      )}
    </div>
  );
};

export default ShoppingCart;
