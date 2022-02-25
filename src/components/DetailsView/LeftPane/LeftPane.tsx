import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Books } from '../../../generated/graphql';
import { ReactComponent as Back } from '../../../assets/back.svg';
import Button from '../../Button';
import { getCurrency } from '../../../utils/getCurrency';
import { CartContext } from '../../../contexts/CartContext';
import styles from './LeftPane.module.css';

type LeftPaneProps = {
  book: Books;
  openCart: () => void;
}

const LeftPane = ({ book, openCart }: LeftPaneProps) => {
  const { image_url, title, available_copies, currency, price } = book;
  const cartContext = useContext(CartContext);

  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1)
  }

  const addBook = () => {
    openCart();
    cartContext.addSelectedBook(book)
  }

  const numberOfBooksInCart = cartContext.cartObject[book.id] || 0
  const copiesOfBook = available_copies && available_copies - numberOfBooksInCart;

  return (
    <div className={styles.leftpane}>
      <div onClick={goBack} className={styles.back}>
        <Back className={styles.backIcon} />
        <span className={styles.backText}>Back</span>
      </div>
      <img className={styles.image} src={image_url as string} alt={title as string} />
      <div
        className={`${styles.availableCopies} ${!!copiesOfBook && copiesOfBook > 0 ? styles.available : styles.notAvailable}`}
      >
        {copiesOfBook === 0 ? 'Out of Stock' : `${copiesOfBook} Cop${copiesOfBook === 1 ? 'y' : 'ies'} Available`}
      </div>
      <div className={styles.price}>{getCurrency(currency)}{price}</div>
      <Button onClick={addBook} size='sm' text='Add to Cart' />
    </div>
  )
}

export default LeftPane;
