import React from 'react';
import BookStats from '../../BookStats/BookStats';
import styles from './BookHover.module.css';
import { Books } from '../../../generated/graphql';
import { getYear } from '../../../utils/getYear'
import { sliceText } from '../../../utils/sliceText'

type BookHoverProps = {
  book: Books;
}

const BookHover = ({ book }: BookHoverProps) => {
  const { available_copies, title, authors, published_at, genres, tags, number_of_purchases, likes, rating } = book;
  const tagsAsString = tags?.map(tag => tag?.name).join(', ') || '';
  const genresAsString = genres?.map(genre => genre?.name).join(', ') || '';
  const authorsAsString = authors?.map(author => author?.name).join(', ') || '';

  return (
    <div className={styles.hover}>
      {
        available_copies && available_copies > 0 ? 
        <span className={styles.available}>Available</span> : 
        <span className={styles.notAvailable}>Out of Stock</span>
      }
      {title && <div className={styles.bookTitle}>{sliceText(title, 18)}</div>}
      <div className={styles.author}>{sliceText(authorsAsString, 25)}</div>
      <div className={styles.year}>{getYear(published_at)}</div>
      <div className={styles.genreTitle}>Genre</div>
      <div className={styles.genre}>{sliceText(genresAsString, 25)}</div>
      <div className={styles.tagTitle}>Tags</div>
      <div className={styles.tags}>{sliceText(tagsAsString, 25)}</div>

      <BookStats numberOfPurchases={number_of_purchases} likes={likes} rating={rating} />
    </div>
  )
}

export default BookHover;
