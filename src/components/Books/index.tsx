import React from 'react';
import Book from './Book/Book';
import styles from './Books.module.css';
import HorizontalLine from '../HorizontalLine';
import Skeleton from '../Skeleton'
import { Books as BookType} from '../../generated/graphql'

type BooksProps = {
  books: BookType[];
  addToCart: (book: BookType) => void;
  openBookDetails: Function;
  loading: boolean;
}

const Books = ({ books, addToCart, openBookDetails, loading }: BooksProps) => {
  return (
    <div className={styles.container}>
      <span className={styles.text}>All Books</span>
      <HorizontalLine />
      {
        loading ? [...new Array(34)].map(() => <Skeleton />) : 
      <div className={styles.gridContainer}>
        {books.map((book: BookType) => {
          return (
            <div key={book.id} className={styles.gridItem}>
              <Book
                book={book}
                addToCart={addToCart}
                openBookDetails={openBookDetails}
              />
            </div>
          )
        })}
      </div>
      }
    </div>
  )
}

export default Books
