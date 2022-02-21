import React, { useState } from 'react';
import BookHover from '../BookHover/BookHover';
import styles from './FeaturedBook.module.css';

type BookProps = {
  book: BookType;
}

const Book = ({ book }: BookProps) => {
  const [showDescription, setShowDescription] = useState(false);
  return (
    <div
      // Delay the display of hover
      className={styles.imageWrapper}
      onMouseEnter={() => setShowDescription(true)}
      onMouseLeave={() => setShowDescription(false)}
    > 
      {showDescription && <BookHover book={book}/>}
      <img alt='book' src={book.image_url} className={styles.bookImage}/>
    </div>
  )
}

export default Book;
