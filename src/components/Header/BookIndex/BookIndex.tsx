import React from 'react';
import { ReactComponent as BookIndexSvg } from '../../../assets/bookIndex.svg';
import styles from './BookIndex.module.css';

const BookIndex = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.bookIndexCircle}>
        <BookIndexSvg />
      </div>
    </div>
  )
}

export default BookIndex;
