import React from 'react';
import BookStats from '../../BookStats/BookStats';
import styles from './BookHover.module.css';

type BookHoverProps = {
  availableCopies: Number;
  bookTitle: String;
  author: String;
  year: String;
  genre: String;
  tags: String;
  numberOfPurchases: Number;
  likes: Number;
  rating: Number;
}

const BookHover = (props: BookHoverProps) => {
  const { availableCopies, bookTitle, author, year, genre, tags, numberOfPurchases, likes, rating } = props;

  return (
    <div className={styles.hover}>
      {
        availableCopies > 0 ? 
        <span className={styles.available}>Available</span> : 
        <span className={styles.notAvailable}>Out of Stock</span>
      }
      <div className={styles.bookTitle}>{bookTitle}</div>
      <div className={styles.author}>{author}</div>
      <div className={styles.year}>{year}</div>
      <div className={styles.genreTitle}>Genre</div>
      <div className={styles.genre}>{genre}</div>
      <div className={styles.tagTitle}>Tags</div>
      <div className={styles.tags}>{tags}</div>

      <BookStats numberOfPurchases={numberOfPurchases} likes={likes} rating={rating} />
    </div>
  )
}

export default BookHover;