import React, { useState } from 'react';
import book from '../../../assets/book.jpg';
import BookHover from '../BookHover/BookHover';
import styles from './FeaturedBook.module.css';

const Book = () => {
  const [showDescription, setShowDescription] = useState(false);
  return (
    <div
      // Delay the display of hover
      className={styles.imageWrapper}
      onMouseEnter={() => setShowDescription(true)}
      onMouseLeave={() => setShowDescription(false)}
    > 
      {showDescription && <BookHover
        status='Available'
        bookTitle= 'Big Magic'
        author='Elizabeth Gilbert'
        year='2019'
        genre='Motivational'
        tags='Creativity, Better Living'
        numberOfPurchases={14}
        likes={11}
        rating={4.0}
      />}
      <img alt='book' src={book} className={styles.bookImage}/>
    </div>
  )
}

export default Book;
