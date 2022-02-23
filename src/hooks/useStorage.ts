import { useState, useEffect } from "react";

const useStorage = (id: string) => {
  const [initialNumberOfCopies, setInitialNumberOfCopies] = useState(0);

  useEffect(() => {
    const cartFromStorage = localStorage.getItem('cart');
    
    if (cartFromStorage) {
      const cart = JSON.parse(cartFromStorage);
      if (id in cart) {
        const initialNumberOfCopies = cart[id]; 
        setInitialNumberOfCopies(initialNumberOfCopies)
      } else {
        setInitialNumberOfCopies(1)
      }
    }

  }, [id])

  const persistCartItem = (item: { [x: string]: number; }) => {
    const cartFromStorage = localStorage.getItem('cart');
    if (cartFromStorage) {
      const cart = JSON.parse(cartFromStorage);
      if (id in cart) {
        cart[id] = item.count;
        localStorage.setItem('cart', JSON.stringify(cart))
      }
      else if (item.id === 0) {
        delete cart.id;
        localStorage.setItem('cart', JSON.stringify(cart))
      } else {
        const newCart = { ...cart, ...item };
        localStorage.setItem('cart', JSON.stringify(newCart))
      }
    } else {
      localStorage.setItem('cart', JSON.stringify({ ...item }))
    }
  }

  return { initialNumberOfCopies, persistCartItem };
};

export default useStorage;
