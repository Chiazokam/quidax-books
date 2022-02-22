import React from 'react';
import styles from './Dots.module.css';

type DotsProps = {
  currentIndex: Number;
  dotsCount: Number;
}

const Dots = ({ currentIndex, dotsCount }: DotsProps) => {
  return (
    <div className={styles.dotsWrapper}>
      {[...new Array(dotsCount)].map((dot, index) => <div key={`${dot}-${index}`} className={`${styles.dot} ${currentIndex === index && styles.activeDot}`}></div>)}
    </div>
  )
}

export default Dots;
