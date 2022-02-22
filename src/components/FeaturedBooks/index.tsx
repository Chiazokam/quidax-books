import React from 'react';
import HorizontalLine from '../HorizontalLine';
import styles from './FeaturedBooks.module.css';
import FeaturedBook from './FeaturedBook/FeaturedBook';
import Carousel from '../Carousel';

type FeaturedBooksProps = {
  books: BookType[];
}

const FeaturedBooks = ({ books }: FeaturedBooksProps) => {
  return (
    <div className={styles.container}>
      <span className={styles.text}>Featured Books</span>
      <div className={styles.featuredBooksLine}>
        <HorizontalLine />
      </div>
      <Carousel itemCount={books.length}>
        {books.map((book: BookType) => {
          return (
            <FeaturedBook key={book.id} book={book} />
          )
        })}
      </Carousel>

    </div>
  )
}

export default FeaturedBooks;
