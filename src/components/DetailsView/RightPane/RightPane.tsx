import React from 'react';
import { Books } from '../../../generated/graphql';
import parse from 'html-react-parser';
import styles from './RightPane.module.css'
import BookStats from '../../BookStats/BookStats'
import HorizontalLine from '../../HorizontalLine'
import { getYear } from '../../../utils/getYear'

type RightPaneProps = {
  book: Books;
}

const RightPane = ({ book }: RightPaneProps) => {
  const { title, subtitle, authors, release_date, number_of_purchases, likes, genres, tags, full_description, rating, publisher, published_at } = book;

  return (
    <div className={styles.rightpane}>
      <div className={styles.scrollable}>
        <div className={styles.title}>{title}: {subtitle}</div>
        <div className={styles.author}>{authors?.map(author => author?.name).join(', ')}</div>
        <div className={styles.year}>{getYear(release_date)}</div>
        <HorizontalLine />
        <div className={styles.bookdetails}>
          <div className={styles.stats}>
            <BookStats numberOfPurchases={number_of_purchases} likes={likes} rating={rating} hasBlackIcons />
          </div>

          <div className={styles.genres}>
            <div className={styles.detailsHead}>Genres</div>
            {genres && <div className={styles.detailsValue}>{genres?.map(genre => genre?.name).join(', ')}</div>}
          </div>

          <div className={styles.tags}>
            <div className={styles.detailsHead}>Tags</div>
            {tags && <div className={styles.detailsValue}>{tags?.map(tag => tag?.name).join(', ')}</div>}
          </div>

          <div className={styles.publisher}>
            <div className={styles.detailsHead}>Publisher</div>
            <div className={styles.detailsValue}>{publisher}</div>
          </div>

          <div className={styles.release}>
            <div className={styles.detailsHead}>Released</div>
            <div className={styles.detailsValue}>{getYear(published_at, true)}</div>
          </div>

        </div>
        <HorizontalLine />

        {full_description && <div className={styles.description}>{parse(full_description)}</div>}
      </div>
    </div>
  )
}

export default RightPane;
