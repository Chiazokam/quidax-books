import { createContext, useState } from "react";
import { Books } from '../generated/graphql'

export type GlobalContent = {
  selectedBooks: Books[],
  addSelectedBook: any,
  totalPrice: number,
  cartObject: {[key: string]: number},
  addOrSubtractItemInCart: any,
  removeBookFromCart: any,
}

export const CartContext = createContext<GlobalContent>({
  selectedBooks: [],
  addSelectedBook: () => {},
  totalPrice: 0,
  cartObject: {},
  addOrSubtractItemInCart: () => {},
  removeBookFromCart: () => {},
});

export const CartProvider = ({ children }: { children: any }) => {
  const [selectedBooks, setSelectedBooks] = useState<Books[]>([]);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [cartObject, setCartObject] = useState<{[key: string]: number}>({});
  
  const calculateTotalPrice = (book: Books, removeBook?: boolean) => {
      const bookPrice = book.price || 0;
      if (removeBook) {
        setTotalPrice((prev) => prev - bookPrice);
      } else {
        setTotalPrice((prev) => prev + bookPrice);
      }
  }

  const addSelectedBook = (book: Books) => {
    setSelectedBooks((prev) =>[...prev, book]);
    const obj = selectedBooks.find(selectedBook => book.id === selectedBook.id);
    const available_copies = obj?.available_copies || 0; // Assumed default as 0, since this method is only called on books that have available copies greater than 0;
    if (obj) {
      if (cartObject[book.id] < available_copies) {
        cartObject[book.id] = cartObject[book.id] + 1;
        setCartObject(() => cartObject);
        calculateTotalPrice(book)
      }
    } else {
      cartObject[book.id] = 1
      setCartObject(() => cartObject);
      calculateTotalPrice(book)
    }
  }

  const removeBookFromCart = (id: string, book: Books) => {
    calculateTotalPrice(book, true)
    delete cartObject[id];
    const newSelectedBooks = selectedBooks.filter(book => book.id !== id)
    setCartObject({...cartObject})
    if (Object.keys(cartObject).length === 0) {
      setTotalPrice(0)
    }
    setSelectedBooks([...newSelectedBooks])
  }

  const addOrSubtractItemInCart = (id: string, action: string, book: Books) => {
    const available_copies = book.available_copies || 0;
    if (action === 'add' && cartObject[id] < available_copies) {
      cartObject[id] = cartObject[id] + 1;
      setCartObject({...cartObject});
      calculateTotalPrice(book)
      } else if (action === 'subtract' && cartObject[id] > 1) {
      cartObject[id] = cartObject[id] - 1;
      setCartObject({...cartObject});
      calculateTotalPrice(book, true)
    } else if (action === 'subtract' && cartObject[id] === 1) {
      calculateTotalPrice(book, true)
      removeBookFromCart(id, book);
    }
  }

  return (
    <CartContext.Provider value={{
      selectedBooks,
      addSelectedBook,
      totalPrice,
      cartObject,
      addOrSubtractItemInCart,
      removeBookFromCart,
    }}>
      {children}
    </CartContext.Provider>
  )
}