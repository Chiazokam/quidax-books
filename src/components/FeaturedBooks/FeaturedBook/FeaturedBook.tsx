import React, { useState } from 'react';
import BookHover from '../BookHover/BookHover';
import styles from './FeaturedBook.module.css';

type BookProps = {
  book: any;
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
      {showDescription && <BookHover
        availableCopies={book.available_copies}
        bookTitle= {book.title}
        author={book.author}
        year={book.release_date}
        genre={book.genres.length > 0 ? book.genres.join(', ') : '-'}
        tags={book.tags.length > 0 ? book.tags.join(', ') : '-'}
        numberOfPurchases={book.number_of_purchases}
        likes={book.likes}
        rating={book.rating}
      />}
      <img alt='book' src={book.image_url} className={styles.bookImage}/>
    </div>
  )
}

export default Book;
