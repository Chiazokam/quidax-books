import React, { useContext } from 'react';

import Logo from './Logo/Logo';
import SearchField from './SearchField/SearchField';
import BookIndex from './BookIndex/BookIndex';
import Cart from '../CartIcon/CartIcon';
import { CartContext } from '../../contexts/CartContext';

import styles from './Header.module.css';

type HeaderProps = {
  openCart: React.MouseEventHandler<HTMLDivElement>;
  cartItemsCount: number;
  handleSearchFieldChange: (value: string) => void;
  searchValue: string | undefined;
}

const Header = ({ openCart, cartItemsCount, handleSearchFieldChange, searchValue }: HeaderProps) => {
  const cartContext = useContext(CartContext);

  return (
    <div className={styles.header}>
      <Logo />
      <SearchField handleSearchFieldChange={handleSearchFieldChange} searchValue={searchValue} />
      <BookIndex />
      <Cart withItemCount itemCount={Object.keys(cartContext.cartObject).length} openCart={openCart} />
    </div>
  );
}

export default Header;
