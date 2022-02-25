import React from 'react';
import Book from './Book/Book';
import styles from './Books.module.css';
import HorizontalLine from '../HorizontalLine';
import Skeleton from '../Skeleton'
import { Books as BookType} from '../../generated/graphql'

type BooksProps = {
  books: BookType[];
  openCart: () => void;
  openBookDetails: Function;
  loading: boolean;
  isUserSearching: boolean;
  searchValue: string | undefined;
  searchDataCount: number;
}

const Books = ({ books, openCart, openBookDetails, loading, isUserSearching, searchValue, searchDataCount }: BooksProps) => {
  return (
    <div className={`${styles.container} ${isUserSearching && styles.searchContainer}`}>
      {isUserSearching ?
        <span className={styles.searchText}>
          <span className={styles.bold}>{searchDataCount} result{searchDataCount === 1 ? '' : 's'} </span> 
          found for
          <span className={styles.bold}> `{searchValue}`</span>
        </span> : 
        <span className={styles.text}>All Books</span>
      }
      <HorizontalLine />
      {
        loading ? [...new Array(34)].map((index) => <Skeleton key={index} />) : 
      <div className={styles.gridContainer}>
        {books.map((book: BookType) => {
          return (
            <div key={book.id} className={styles.gridItem}>
              <Book
                key={book.id}
                book={book}
                openCart={openCart}
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
