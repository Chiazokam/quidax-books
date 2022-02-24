import { createContext, useState } from "react";
import { Books } from '../generated/graphql'

export type GlobalContent = {
  selectedBooks: Books[],
  addSelectedBook: any,
  totalPrice: number,
  setTotalPrice:(price: number) => void,
  cartObject: {[key: string]: number},
  addOrSubtractItemInCart: any,
  removeBookFromCart: any,
  getBooksMap: any
}

export const CartContext = createContext<GlobalContent>({
  selectedBooks: [],
  addSelectedBook: () => {},
  totalPrice: 0,
  setTotalPrice: () => {},
  cartObject: {},
  addOrSubtractItemInCart: () => {},
  removeBookFromCart: () => {},
  getBooksMap: () => {}
});

export const CartProvider = ({ children }: { children: any }) => {
  const [selectedBooks, setSelectedBooks] = useState<Books[]>([]);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [cartObject, setCartObject] = useState<{[key: string]: number}>({});

  const addSelectedBook = (book: Books) => {
    setSelectedBooks((prev) =>[...prev, book]);
    const obj = selectedBooks.find(selectedBook => book.id === selectedBook.id);
    const available_copies = obj?.available_copies || 0; // Assumed default as 0, since this method is only called on books that have available copies greater than 0;
    if (obj) {
      if (cartObject[book.id] < available_copies) {
        cartObject[book.id] = cartObject[book.id] + 1;
        setCartObject(() => cartObject);
      }
    } else {
      cartObject[book.id] = 1
      setCartObject(() => cartObject);
    }
  }

  const removeBookFromCart = (id: string) => {
    delete cartObject[id];
    const newSelectedBooks = selectedBooks.filter(book => book.id !== id)
    setCartObject({...cartObject})
    setSelectedBooks([...newSelectedBooks])
  }

  const addOrSubtractItemInCart = (id: string, action: string, book: Books) => {
    const available_copies = book.available_copies || 0;
    if (action === 'add' && cartObject[id] < available_copies) {
      cartObject[id] = cartObject[id] + 1;
      setCartObject({...cartObject});
    } else if (action === 'subtract' && cartObject[id] > 1) {
      cartObject[id] = cartObject[id] - 1;
      setCartObject({...cartObject});
    } else if (action === 'subtract' && cartObject[id] === 1) {
      removeBookFromCart(id);
    }
  }

  const getBooksMap = (booksMap: any) => {
    console.log(booksMap,'>>>>>>>>>>>>>>>')
  }

  return (
    <CartContext.Provider value={{
      selectedBooks,
      addSelectedBook,
      totalPrice,
      setTotalPrice,
      cartObject,
      addOrSubtractItemInCart,
      removeBookFromCart,
      getBooksMap
    }}>
      {children}
    </CartContext.Provider>
  )
}