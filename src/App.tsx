import React, { useState, useEffect } from 'react';
import { Routes, Route } from "react-router-dom";
import Home from './containers/Home';
import Cart from './components/Cart';
import CartBackdrop from './components/Cart/CartBackdrop/CartBackdrop';
import DetailsView from './containers/DetailsView';
import Header from './components/Header';
import { useBooksQuery, Books, useFeaturedBooksQuery, useSearchBooksQuery } from './generated/graphql';
import { CartProvider } from './contexts/CartContext';

const App = () => {

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [books, setBooks] = useState<Books[]>([]);
  const [featuredBooks, setFeaturedBooks] = useState<Books[]>([]);
  const [searchValue, setSearchValue] = useState<string | undefined>();
  const [isUserSearching, setIsUserSearching] = useState(false);

  const { loading, data } = useBooksQuery()
  const { loading: featuredLoading, data: featuredData } = useFeaturedBooksQuery()
  const { data: searchData } = useSearchBooksQuery({
    skip: !searchValue,
    variables: {
      search: searchValue
    }
  })

  useEffect(() => {
    if (data) {
      setBooks(data.books as Books[])
    }
  }, [data, searchValue])

  useEffect(() => {
    if (featuredData) {
      setFeaturedBooks(featuredData.books as Books[])
    }
  }, [data, featuredData])

  useEffect(() => {
    if (searchData) {
      setBooks(searchData.books as Books[])
    }
  }, [searchData])

  const openCart = () => {
    setIsCartOpen(true)
  }

  const handleSearchFieldChange = (value: string) => {
    if (!value) {
      setSearchValue(undefined)
      setIsUserSearching(false);
    } else {
      setIsUserSearching(true);
    }
    setSearchValue(value);
  }

  return (
    <CartProvider>
      <div style={{ height: '100%' }}>
      <Header
        openCart={openCart}
        handleSearchFieldChange={handleSearchFieldChange}
        searchValue={searchValue}
      />

        {isCartOpen && 
          <>
            <Cart
              closeCart={() => setIsCartOpen(false)}
              isCartOpen={isCartOpen}
              books={books}
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
                books={books}
                featuredBooks={featuredBooks}
                featuredLoading={featuredLoading}
                dataLoading={loading}
                isUserSearching={isUserSearching}
                searchValue={searchValue}
                searchDataCount={books.length}
              />
            }></Route>
          <Route path='books/:id' element={<DetailsView openCart={openCart} />} />
        </Routes>
      </div>
    </CartProvider>
  );
}

export default App;
