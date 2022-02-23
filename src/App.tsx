import React, { useState, useEffect } from 'react';
import { Routes, Route } from "react-router-dom";
import Home from './containers/Home';
import Cart from './components/Cart';
import CartBackdrop from './components/Cart/CartBackdrop/CartBackdrop';
import DetailsView from './containers/DetailsView';
import { useBooksQuery, Books, useFeaturedBooksQuery } from './generated/graphql';

const App = () => {

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [books, setBooks] = useState<Books[]>([]);
  const [featuredBooks, setFeaturedBooks] = useState([]);
  const [selectedBooks, setSelectedBooks] = useState<Books[]>([]);
  const { loading, error, data } = useBooksQuery()
  const { loading: featuredLoading, error: featuredError, data: featuredData } = useFeaturedBooksQuery()

  useEffect(() => {
    if (data) {
      setBooks(data.books as Books[])
    }
  }, [data])

  useEffect(() => {
    if (featuredData) {
      //@ts-ignore
      setFeaturedBooks(featuredData.books)
    }
  }, [data, featuredData])

  const removeItemFromCart = (cartItem: Books) => {
    const newSelectedBooks = selectedBooks.filter((book: Books) => book.id !== cartItem.id);
    setSelectedBooks(newSelectedBooks);
  }

  const updateAvailableCopies = (action: string, bookId: string) => {
    // const bookIndex = books.findIndex((book: BookType) => book.id === bookId);
    // const currentCopiesOfBook = books[bookIndex].available_copies;

    // let newNumberOfCopies: number = currentCopiesOfBook;

    // if (action === 'add' && currentCopiesOfBook > 0) {
    //   newNumberOfCopies = currentCopiesOfBook - 1;
    // }
    // if (action === 'subtract') {
    //   newNumberOfCopies = currentCopiesOfBook + 1;
    // }

    // const updatedBook = {...books[bookIndex], available_copies: newNumberOfCopies}
    // books[bookIndex] = updatedBook;
    // setBooks(() => books);
  }

  const openCart = () => {
    setIsCartOpen(true)
  }

  const addToCartHandler = (book: Books) => {
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
          <Route 
            index
            element={
              <Home
                openCart={openCart}
                selectedBooks={selectedBooks}
                addToCartHandler={addToCartHandler}
                books={books}
                featuredBooks={featuredBooks}
                featuredLoading={featuredLoading}
                dataLoading={loading}
              />
            }></Route>
          <Route path='books/:id' element={<DetailsView openCart={openCart} />} />
        </Routes>
      </div>
  );
}

export default App;
