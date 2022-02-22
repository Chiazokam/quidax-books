import React, { useState } from 'react';
import { Routes, Route } from "react-router-dom";
import Home from './containers/Home';
import Cart from './components/Cart';
import CartBackdrop from './components/Cart/CartBackdrop/CartBackdrop';
import DetailsView from './containers/DetailsView';
import { books as dummybooks } from './utils/dummyBooks';

const App = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [books, setBooks] = useState(dummybooks);
  const [selectedBooks, setSelectedBooks] = useState<CartItem[]>([]);

  const removeItemFromCart = (cartItem: CartItem) => {
    const newSelectedBooks = selectedBooks.filter((book: CartItem) => book.id !== cartItem.id);
    setSelectedBooks(newSelectedBooks);
  }

  const updateAvailableCopies = (action: string, bookId: string) => {
    const bookIndex = books.findIndex((book: BookType) => book.id === bookId);
    const currentCopiesOfBook = books[bookIndex].available_copies;

    let newNumberOfCopies: number = currentCopiesOfBook;

    if (action === 'add' && currentCopiesOfBook > 0) {
      newNumberOfCopies = currentCopiesOfBook - 1;
    }
    if (action === 'subtract') {
      newNumberOfCopies = currentCopiesOfBook + 1;
    }

    const updatedBook = {...books[bookIndex], available_copies: newNumberOfCopies}
    books[bookIndex] = updatedBook;
    setBooks(() => books);
  }

  const openCart = () => {
    setIsCartOpen(true)
  }

  const addToCartHandler = (book: CartItem) => {
    if (!isCartOpen) {
      setIsCartOpen(true);
    }
    setSelectedBooks([...selectedBooks, book])
  }

  return (
    <div style={{ height: '100%' }}>
       {isCartOpen && 
        <>
          <Cart
            closeCart={() => setIsCartOpen(false)}
            isCartOpen={isCartOpen}
            selectedBooks={selectedBooks}
            removeItemFromCart={removeItemFromCart}
            updateAvailableCopies={updateAvailableCopies}
          />
          <CartBackdrop closeCart={() => setIsCartOpen(false)} />
        </>
      }
      
      <Routes>
        <Route index element={<Home openCart={openCart} selectedBooks={selectedBooks} addToCartHandler={addToCartHandler} books={books} />}></Route>
        <Route path='books/:id' element={<DetailsView openCart={openCart} />} />
      </Routes>
    </div>
  );
}

export default App;
