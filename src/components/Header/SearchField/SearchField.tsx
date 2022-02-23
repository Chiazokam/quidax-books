import React from 'react';
import styles from './SearchField.module.css'
import { ReactComponent as Search } from '../../../assets/search.svg';

type SearchFieldProps = {
  handleSearchFieldChange: (value: string) => void;
  searchValue: string | undefined;
}

const SearchField = ({ handleSearchFieldChange, searchValue }: SearchFieldProps) => {
  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    handleSearchFieldChange(event.target.value)
  }

  return (
    <div className={styles.container}>
      <div className={styles.inputWrapper}>
        <input
          className={styles.input}
          placeholder='Search books, genres, authors, etc.'
          onChange={changeHandler}
          value={searchValue}
        />
        <div className={styles.icon}>
          <Search className={styles.searchIcon}/>
        </div>
      </div>
    </div>
  )
}

export default SearchField;
