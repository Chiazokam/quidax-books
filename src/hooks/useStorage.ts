import { useState, useEffect } from "react";

const useStorage = (id: string) => {
  const [initialNumberOfCopies, setInitialNumberOfCopies] = useState(0);

  useEffect(() => {
    let cart;
    const cartFromStorage = localStorage.getItem('cart');
    if (cartFromStorage) {
      cart = JSON.parse(cartFromStorage);
      if (id in cart) {
        const initialNumberOfCopies = cart.id; 
        setInitialNumberOfCopies(initialNumberOfCopies)
      } else {
        setInitialNumberOfCopies(0)
      }
    }

  }, [id])

  return [initialNumberOfCopies];
};

export default useStorage;
