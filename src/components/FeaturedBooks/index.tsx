import React from 'react';
import HorizontalLine from '../HorizontalLine';
import styles from './FeaturedBooks.module.css';
import FeaturedBook from './FeaturedBook/FeaturedBook';
import Carousel from '../Carousel';
import { Books } from '../../generated/graphql'
import Skeleton from '../Skeleton'

type FeaturedBooksProps = {
  books: Books[];
  loading: boolean;
}

const FeaturedBooks = ({ books, loading }: FeaturedBooksProps) => {
  return (
    <div className={styles.container}>
      <span className={styles.text}>Featured Books</span>
      <div className={styles.featuredBooksLine}>
        <HorizontalLine />
      </div>
      {loading  ? 
      [...new Array(3)].map((index) => <Skeleton key={index} />): 
      <>
        {books.length > 0 && <Carousel itemCount={books.length}>
          {books.map((book: Books) => {
            return (
              <FeaturedBook key={book.id} book={book} />
            )
          })}
        </Carousel>}
      </>
      }
    </div>
  )
}

export default FeaturedBooks;
