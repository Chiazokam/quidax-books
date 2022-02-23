import React from 'react';
import BookStats from '../../BookStats/BookStats';
import styles from './BookHover.module.css';
import { Books } from '../../../generated/graphql';
import { getYear } from '../../../utils/getYear'

type BookHoverProps = {
  book: Books;
}

const BookHover = ({ book }: BookHoverProps) => {
  const { available_copies, title, authors, published_at, genres, tags, number_of_purchases, likes, rating } = book;
  return (
    <div className={styles.hover}>
      {
        available_copies && available_copies > 0 ? 
        <span className={styles.available}>Available</span> : 
        <span className={styles.notAvailable}>Out of Stock</span>
      }
      <div className={styles.bookTitle}>{title}</div>
      <div className={styles.author}>{authors?.map(author => author?.name).join(', ')}</div>
      <div className={styles.year}>{getYear(published_at)}</div>
      <div className={styles.genreTitle}>Genre</div>
      {genres && <div className={styles.genre}>{genres?.map(genre => genre?.name).join(', ')}</div>}
      <div className={styles.tagTitle}>Tags</div>
      {tags && <div className={styles.tags}>{tags?.map(tag => tag?.name).join(', ')}</div>}

      <BookStats numberOfPurchases={number_of_purchases} likes={likes} rating={rating} />
    </div>
  )
}

export default BookHover;
