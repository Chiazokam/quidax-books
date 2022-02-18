import React from 'react';
import styles from './SearchField.module.css'
import { ReactComponent as Search } from '../../../assets/search.svg';

const SearchField = () => {
  return (
    <div className={styles.container}>
      <div className={styles.inputWrapper}>
        <input
          className={styles.input}
          placeholder='Search books, genres, authors, etc.'
        />
        <div className={styles.icon}>
          <Search className={styles.searchIcon}/>
        </div>
      </div>
    </div>
  )
}

export default SearchField;
