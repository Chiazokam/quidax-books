import React from 'react';
import BookStats from '../../BookStats/BookStats';
import styles from './BookHover.module.css';

type BookHoverProps = {
  book: BookType;
}

const BookHover = ({ book }: BookHoverProps) => {
  const { available_copies, title, author, release_date, genres, tags, number_of_purchases, likes, rating } = book;

  return (
    <div className={styles.hover}>
      {
        available_copies > 0 ? 
        <span className={styles.available}>Available</span> : 
        <span className={styles.notAvailable}>Out of Stock</span>
      }
      <div className={styles.bookTitle}>{title}</div>
      <div className={styles.author}>{author}</div>
      <div className={styles.year}>{release_date}</div>
      <div className={styles.genreTitle}>Genre</div>
      <div className={styles.genre}>{genres.join(', ')}</div>
      <div className={styles.tagTitle}>Tags</div>
      <div className={styles.tags}>{tags.join(', ')}</div>

      <BookStats numberOfPurchases={number_of_purchases} likes={likes} rating={rating} />
    </div>
  )
}

export default BookHover;
