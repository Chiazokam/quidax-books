import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import FeaturedBooks from './components/FeaturedBooks';
import Books from './components/Books';
import Cart from './components/Cart';
import CartBackdrop from './components/Cart/CartBackdrop/CartBackdrop';
import { books as dummybooks } from './utils/dummyBooks';

const App = () => {
  // Create hook to get the books data
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedBooks, setSelectedBooks] = useState<CartItem[]>([]);
  const [books, setBooks] = useState(dummybooks);

  const addToCartHandler = (book: CartItem) => {
    if (!isCartOpen) {
      setIsCartOpen(true);
    }
    setSelectedBooks([...selectedBooks, book])
  }

  const openCart = () => {
    setIsCartOpen(true)
  }

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

  useEffect (() => {
    setBooks(books)
  }, [books])

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
      <Header openCart={openCart} cartItemsCount={selectedBooks.length} />
      <FeaturedBooks books={books} />
      <Books books={books} addToCart={addToCartHandler} />
    </div>
  );
}

export default App;
