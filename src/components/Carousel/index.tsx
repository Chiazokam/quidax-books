import React, { useState, useEffect } from 'react';
import { ReactComponent as LeftArrow } from '../../assets/leftArrow.svg';
import { ReactComponent as RightArrow } from '../../assets/rightArrow.svg';
import Dots from './Dots/Dots';
import styles from './Carousel.module.css';

type CarouselProps = {
  children: JSX.Element[];
  itemCount: number;
}

const Carousel = (props: CarouselProps) => {
  const { children, itemCount } = props;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [length, setLength] = useState(itemCount);

  const next = () => {
    if (currentIndex < (length - 1)) {
      setCurrentIndex(prevState => prevState + 1)
    }
  }

  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prevState => prevState - 1)
    }
  }

  return (
    <>
      <div className={styles.carousel}>
        <div className={styles.carouselWrapper}>
          {currentIndex > 0 && 
          <button onClick={prev} className={styles.leftArrow}>
            <LeftArrow />
          </button>}

          <div
            className={styles.carouselContentWrapper}
          >
            <div className={styles.carouselContent} style={{ transform: `translateX(-${currentIndex * (100 / 6)}%)` }}>
              {children}
            </div>
          </div>

          {currentIndex < (length - 1) && <button onClick={next} className={styles.rightArrow}>
            <RightArrow />
          </button>}

        </div>
      </div>
      <Dots currentIndex={currentIndex} dotsCount={itemCount} />
    </>
  )
}

export default Carousel;
