import React from 'react';
import { ReactComponent as People} from '../../assets/people.svg';
import { ReactComponent as Love} from '../../assets/love.svg';
import styles from './BookStats.module.css';

type BookStatsProps = {
  numberOfPurchases: Number;
  likes: Number;
  rating: Number;
}

const BookStats = ({ numberOfPurchases, likes, rating }: BookStatsProps) => {
  // const ratingGenerator = () => {
  //   for(let count = 0; count <= rating; count++) {
  //     if ()
  //   }
  // }

  return (
    <div className={styles.bookStats}>
        <div className={styles.purchases}>
          <People />
          <div className={styles.purchaseCount}> {numberOfPurchases} </div>
        </div>
        <div className={styles.likes}>
          <Love />
          <div className={styles.likesCount}> {likes} </div>
        </div>
        <div className={styles.rating}>
          <div className={styles.ratingTitle}>Ratings: <span className={`${styles.ratingValue}.0`}>{rating}</span></div>
        </div>
      </div>
  )
}

export default BookStats