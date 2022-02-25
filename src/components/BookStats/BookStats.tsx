import React from 'react';
import { ReactComponent as People} from '../../assets/people.svg';
import { ReactComponent as Love} from '../../assets/love.svg';
import { ReactComponent as FilledStar} from '../../assets/filledStar.svg';
import { ReactComponent as EmptyStar} from '../../assets/emptyStar.svg';
import { ReactComponent as DarkEmptyStar} from '../../assets/darkEmptyStar.svg';
import { InputMaybe } from '../../generated/graphql';
import styles from './BookStats.module.css';

type BookStatsProps = {
  numberOfPurchases: InputMaybe<number> | undefined;
  likes: InputMaybe<number> | undefined;
  rating: InputMaybe<number> | undefined;
  hasBlackIcons?: Boolean;
}

const BookStats = ({ numberOfPurchases, likes, rating, hasBlackIcons }: BookStatsProps) => {
  const bookRating = rating || 0;

  return (
    <div className={styles.bookStats}>
      <div className={styles.purchases}>
        <People className={hasBlackIcons && styles.people} />
        <div className={styles.purchaseCount}> {numberOfPurchases} </div>
      </div>
      <div className={`${styles.likes} ${hasBlackIcons && styles.blackIcons}`}>
        <Love className={hasBlackIcons && styles.love} />
        <div className={styles.likesCount}> {likes} </div>
      </div>
      <div className={styles.rating}>
        <div className={styles.ratingTitle}>Ratings: <span className={styles.ratingValue}>{rating}</span></div>
        <span>
          {[...new Array(Math.round(bookRating))].map((star => <FilledStar key={star}/>))}
        </span>
        <span>{[...new Array(5 - Math.round(bookRating))].map(star => hasBlackIcons ? <EmptyStar key={star} /> : <DarkEmptyStar />)}</span>
      </div>
    </div>
  )
}

export default BookStats