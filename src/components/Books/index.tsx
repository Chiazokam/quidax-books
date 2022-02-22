import React from 'react';
import Book from './Book/Book';
import styles from './Books.module.css';
import HorizontalLine from '../HorizontalLine';

type BooksProps = {
  books: BookType[];
  addToCart: (book: CartItem) => void;
}

const Books = ({ books, addToCart }: BooksProps) => {
  return (
    <div className={styles.container}>
      <span className={styles.text}>All Books</span>
      <HorizontalLine />
      <div className={styles.gridContainer}>
        {books.map((book: BookType) => {
          return (
            <div key={book.id} className={styles.gridItem}>
              <Book
                book={book}
                addToCart={addToCart}
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Books
