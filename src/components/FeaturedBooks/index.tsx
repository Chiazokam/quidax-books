import React from 'react';
import HorizontalLine from '../HorizontalLine';
import styles from './FeaturedBooks.module.css';

const FeaturedBooks = () => {
  return (
    <div className={styles.container}>
      <span className={styles.text}>Featured Books</span>
      <HorizontalLine />
    </div>
  )
}

export default FeaturedBooks;
