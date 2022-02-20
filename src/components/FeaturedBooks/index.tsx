import React from 'react';
import HorizontalLine from '../HorizontalLine';
import styles from './FeaturedBooks.module.css';
import Book from './FeaturedBook/FeaturedBook';

const FeaturedBooks = () => {
  return (
    <div className={styles.container}>
      <span className={styles.text}>Featured Books</span>
      <HorizontalLine />
      <Book />
    </div>
  )
}

export default FeaturedBooks;
