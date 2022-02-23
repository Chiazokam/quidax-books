import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BookHover from '../BookHover/BookHover';
import { Books } from '../../../generated/graphql'
import styles from './FeaturedBook.module.css';

type BookProps = {
  book: Books;
}

const Book = ({ book }: BookProps) => {
  const [showDescription, setShowDescription] = useState(false);
  const navigate = useNavigate();

  const openBookDetails = () => {
    navigate(`books/${book.id}`);
  }

  return (
    <div
      // Delay the display of hover
      className={styles.imageWrapper}
      onMouseEnter={() => setShowDescription(true)}
      onMouseLeave={() => setShowDescription(false)}
      onClick={openBookDetails}
    > 
      {showDescription && <BookHover book={book}/>}
      <img alt={book.title as string} src={book.image_url as string} className={styles.bookImage}/>
    </div>
  )
}

export default Book;
