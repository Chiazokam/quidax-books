import React, { useState, useEffect } from 'react';
import { ReactComponent as LeftArrow } from '../../assets/leftArrow.svg';
import { ReactComponent as RightArrow } from '../../assets/rightArrow.svg';
import Dots from './Dots/Dots';
import styles from './Carousel.module.css';

type CarouselProps = {
  children: any;
}

const Carousel = (props: CarouselProps) => {
  const { children } = props;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [length, setLength] = useState(children.length);
  const [touchPosition, setTouchPosition] = useState(null)

  // useEffect(() => {
  //   setLength(children.length)
  // }, [children])

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

  const handleTouchStart = (e: any) => {
    const touchDown = e.touches[0].clientX
    setTouchPosition(touchDown)
}

  const handleTouchMove = (e: any) => {
    const touchDown = touchPosition

    if(touchDown === null) {
        return
    }

    const currentTouch = e.touches[0].clientX
    const diff = touchDown - currentTouch

    if (diff > 5) {
        next()
    }

    if (diff < -5) {
        prev()
    }

    setTouchPosition(null)
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
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
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
      <Dots currentIndex={currentIndex} />
    </>
  )
}

export default Carousel;
