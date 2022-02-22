import React from 'react';
import styles from './RightPane.module.css'
import BookStats from '../../BookStats/BookStats'
import HorizontalLine from '../../HorizontalLine'

type RightPaneProps = {
  book: BookType;
}

const RightPane = ({ book }: RightPaneProps) => {
  const { title, subtitle, author, release_date, number_of_purchases, likes, genres, tags, full_description, rating, publisher } = book;

  return (
    <div className={styles.rightpane}>
        <div className={styles.title}>{title}: {subtitle}</div>
        <div className={styles.author}>{author}</div>
        <div className={styles.year}>{release_date}</div>
        <HorizontalLine />
        <div className={styles.bookdetails}>
          <div className={styles.stats}>
            <BookStats numberOfPurchases={number_of_purchases} likes={likes} rating={rating} hasBlackIcons />
          </div>

          <div className={styles.genres}>
            <div className={styles.detailsHead}>Genres</div>
            <div className={styles.detailsValue}>{genres.join(', ')}</div>
          </div>

          <div className={styles.tags}>
            <div className={styles.detailsHead}>Tags</div>
            <div className={styles.detailsValue}>{tags.join(', ')}</div>
          </div>

          <div className={styles.publisher}>
            <div className={styles.detailsHead}>Publisher</div>
            <div className={styles.detailsValue}>{publisher}</div>
          </div>

          <div className={styles.release}>
            <div className={styles.detailsHead}>Released</div>
            <div className={styles.detailsValue}>{release_date}</div>
          </div>

        </div>
        <HorizontalLine />

        <div className={styles.description}>{full_description}</div>
      </div>
  )
}

export default RightPane;
