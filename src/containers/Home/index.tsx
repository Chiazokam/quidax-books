import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header';
import FeaturedBooks from '../../components/FeaturedBooks';
import Books from '../../components/Books';
import { Books as Book} from '../../generated/graphql'

type HomeProps = {
  openCart: React.MouseEventHandler<HTMLDivElement>;
  selectedBooks: Book[];
  addToCartHandler: (book: Book) => void;
  books: Book[];
  featuredBooks: Book[];
  dataLoading: boolean;
  featuredLoading: boolean;
}

const Home = ({ openCart, addToCartHandler, selectedBooks, books, dataLoading, featuredBooks, featuredLoading }: HomeProps) => {
  const navigate = useNavigate();

  const openBookDetails = (id: string) => {
    navigate(`books/${id}`);
  }

  return (
    <>
      <Header openCart={openCart} cartItemsCount={selectedBooks.length} />
      <div style={{ zIndex: 100 }}>
        <FeaturedBooks books={featuredBooks} loading={featuredLoading} />
        <Books books={books} addToCart={addToCartHandler} openBookDetails={openBookDetails} loading={dataLoading} />
      </div>
    </>
  );
}

export default Home;
