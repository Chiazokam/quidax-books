import React, { useState, useEffect } from 'react';
import styles from './CartItem.module.css';
import useStorage from '../../../hooks/useStorage';
import HorizontalLine from '../../HorizontalLine';
import { Books } from '../../../generated/graphql'

type CartItemProps = {
  book: Books;
  removeItemFromCart: Function;
  updateAvailableCopies: Function;
  addAllCartPrices: Function;
}

const CartItem = ({ book, removeItemFromCart, updateAvailableCopies, addAllCartPrices }: CartItemProps) => {
  const { id, image_url, price, title, authors, available_copies } = book;

  const { initialNumberOfCopies, persistCartItem } = useStorage(id);
  const [numberOfCopies, setNumberOfCopies] = useState(initialNumberOfCopies);

  const updateCopies = (action: string) => {
    updateAvailableCopies(action, id);
    if (numberOfCopies === 1 && action === 'subtract') removeItemFromCart(book)
    if (action === 'add' && available_copies && numberOfCopies < available_copies) setNumberOfCopies(prev => prev + 1)
    if (action === 'subtract' && numberOfCopies !== 0 && available_copies !== 0) setNumberOfCopies(prev => prev - 1)
    const cart = {
      [id]: numberOfCopies
    }
    persistCartItem(cart);
  }

  useEffect(() => {
    setNumberOfCopies(initialNumberOfCopies)
  }, [initialNumberOfCopies])

  useEffect(() => {
    addAllCartPrices(price && price * numberOfCopies)
  }, [numberOfCopies])

  // useEffect(() => {
  //   updateAvailableCopies('add', id)
  //   setNumberOfCopies(numberOfCopies + 1);
  //   const cart = {
  //     [id]: numberOfCopies
  //   }
  //   persistCartItem(cart);
  // }, [updateAvailableCopies, id])

  return (
    <>
      <div className={styles.item}>
        <div className={styles.book}>
          <div className={styles.imageWrapper}><img className={styles.image} src={image_url as string | undefined} alt={title as string | undefined} /></div>
          <div className={styles.description}>
            <div className={styles.title}>{title}</div>
            {authors && <div className={styles.author}>{authors?.map(author => author?.name).join(', ')}</div>}
            <div onClick={() => removeItemFromCart(book)} className={styles.remove}>Remove</div>
          </div>
        </div>

        <div className={styles.price}>
          <div className={styles.singlePrice}>${price}</div>
          <div onClick={() => updateCopies('subtract')} className={styles.addMinus}>-</div>
          <div className={`${styles.addMinus} ${styles.number}`}>{numberOfCopies}</div>
          <div onClick={() => updateCopies('add')} className={styles.addMinus}>+</div>
          {price && <div className={styles.bookPrice}>${(price * numberOfCopies).toFixed(2)}</div>}

        </div>
      </div>
      <div className={styles.line}>
         <HorizontalLine />
      </div>
    </>
  )
}

export default CartItem;
