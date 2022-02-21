import React from 'react';
import HorizontalLine from '../HorizontalLine';
import styles from './FeaturedBooks.module.css';
import FeaturedBook from './FeaturedBook/FeaturedBook';
import Carousel from '../Carousel';

type FeaturedBooksProps = {
  books: any;
}

const FeaturedBooks = ({ books }: FeaturedBooksProps) => {
  return (
    <div className={styles.container}>
      <span className={styles.text}>Featured Books</span>
      <HorizontalLine />
      <Carousel>
        {books.map((book: any) => {
          return (
            <FeaturedBook book={book} />
          )
        })}
      </Carousel>

    </div>
  )
}

export default FeaturedBooks;
