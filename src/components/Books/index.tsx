import React from 'react';
import Book from './Book/Book';
import styles from './Books.module.css';
import HorizontalLine from '../HorizontalLine';

type BooksProps = {
  books: any;
}

const Books = ({ books }: BooksProps) => {
  return (
    <div className={styles.container}>
      <span className={styles.text}>All Books</span>
      <HorizontalLine />
      <div className={styles.gridContainer}>
        {books.map((book: any) => {
          return (
            <div className={styles.gridItem}>
              <Book
                bookTitle={book.title}
                author={book.author}
                year={book.release_date}
                genre={book.genres.length > 0 ? book.genres.join(', ') : '-'}
                numberOfPurchases={book.number_of_purchases}
                likes={book.likes}
                rating={book.rating}
                price={book.price}
                availableCopies={book.available_copies}
                imageUrl={book.image_url}
                currency={book.currency}
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Books
