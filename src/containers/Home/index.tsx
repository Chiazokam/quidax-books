import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header';
import FeaturedBooks from '../../components/FeaturedBooks';
import Books from '../../components/Books';

type HomeProps = {
  openCart: React.MouseEventHandler<HTMLDivElement>;
  selectedBooks: CartItem[];
  addToCartHandler: (book: CartItem) => void;
  books: BookType[];
}

const Home = ({ openCart, addToCartHandler, selectedBooks, books }: HomeProps) => {
  const navigate = useNavigate();

  const openBookDetails = (id: string) => {
    navigate(`books/${id}`);
  }

  return (
    <>
      <Header openCart={openCart} cartItemsCount={selectedBooks.length} />
      <FeaturedBooks books={books} />
      <Books books={books} addToCart={addToCartHandler} openBookDetails={openBookDetails} />
    </>
  );
}

export default Home;
