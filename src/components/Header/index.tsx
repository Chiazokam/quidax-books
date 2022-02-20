import React from 'react';

import Logo from './Logo/Logo';
import SearchField from './SearchField/SearchField';
import BookIndex from './BookIndex/BookIndex';
import Cart from '../Cart/Cart';

import styles from './Header.module.css';

const Header = () => {
  return (
    <div className={styles.header}>
      <Logo />
      <SearchField />
      <BookIndex />
      <Cart withItemCount itemCount={4} />
    </div>
  );
}

export default Header;
