import React from 'react';
import styles from './Dots.module.css';

type DotsProps = {
  currentIndex: Number;
}

const Dots = ({ currentIndex }: DotsProps) => {
  return (
    <div className={styles.dotsWrapper}>
      <div className={`${styles.dot} ${currentIndex === 0 && styles.activeDot}`}></div>
      <div className={`${styles.dot} ${currentIndex === 1 && styles.activeDot}`}></div>
      <div className={`${styles.dot} ${currentIndex === 2 && styles.activeDot}`}></div>
      <div className={`${styles.dot} ${currentIndex === 3 && styles.activeDot}`}></div>
      <div className={`${styles.dot} ${currentIndex === 4 && styles.activeDot}`}></div>
      <div className={`${styles.dot} ${currentIndex === 5 && styles.activeDot}`}></div>
      <div className={`${styles.dot} ${currentIndex === 6 && styles.activeDot}`}></div>
      <div className={`${styles.dot} ${currentIndex === 7 && styles.activeDot}`}></div>
    </div>
  )
}

export default Dots;
