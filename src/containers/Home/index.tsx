import React from 'react';
import { useNavigate } from 'react-router-dom';
import FeaturedBooks from '../../components/FeaturedBooks';
import Books from '../../components/Books';
import { Books as Book } from '../../generated/graphql'

type HomeProps = {
  openCart: () => void;
  books: Book[];
  featuredBooks: Book[];
  dataLoading: boolean;
  featuredLoading: boolean;
  isUserSearching: boolean;
  searchValue: string | undefined;
  searchDataCount: number;
}

const Home = ({
  openCart,
  books,
  dataLoading,
  featuredBooks,
  featuredLoading,
  isUserSearching,
  searchValue,
  searchDataCount
}: HomeProps) => {
  const navigate = useNavigate();

  const openBookDetails = (id: string) => {
    navigate(`books/${id}`);
  }

  return (
    <>
      <div style={{ zIndex: 100 }}>
        {!isUserSearching && <FeaturedBooks books={featuredBooks} loading={featuredLoading} />}
        <Books
          books={books}
          openCart={openCart}
          openBookDetails={openBookDetails}
          loading={dataLoading}
          isUserSearching={isUserSearching}
          searchValue={searchValue}
          searchDataCount={searchDataCount}
        />
      </div>
    </>
  );
}

export default Home;
