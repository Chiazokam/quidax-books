import React, { useContext } from 'react';
import styles from './CartItem.module.css';
import HorizontalLine from '../../HorizontalLine';
import { CartContext } from '../../../contexts/CartContext'
import { Books } from '../../../generated/graphql'
import { sliceText } from '../../../utils/sliceText';

type CartItemProps = {
  book: Books;
  removeItemFromCart: Function;
  updateAvailableCopies: Function;
  addAllCartPrices: Function;
  countOfItem: number
}

const CartItem = ({ book, removeItemFromCart, updateAvailableCopies, addAllCartPrices, countOfItem }: CartItemProps) => {
  const { id, image_url, price, title, authors } = book;


  const cartContext = useContext(CartContext);

  return (
    <>
      <div className={styles.item}>
        <div className={styles.book}>
          <div className={styles.imageWrapper}><img className={styles.image} src={image_url as string | undefined} alt={title as string | undefined} /></div>
          <div className={styles.description}>
            <div className={styles.title}>{sliceText(title as string, 26)}</div>
            {authors && <div className={styles.author}>{authors?.map(author => author?.name).join(', ')}</div>}
            <div onClick={() => cartContext.removeBookFromCart(id)} className={styles.remove}>Remove</div>
          </div>
        </div>

        <div className={styles.price}>
          <div className={styles.singlePrice}>${price}</div>
          <div onClick={() => cartContext.addOrSubtractItemInCart(id, 'subtract', book)} className={styles.addMinus}>-</div>
          <div  className={`${styles.addMinus} ${styles.number}`}>{countOfItem}</div>
          <div onClick={() => cartContext.addOrSubtractItemInCart(id, 'add', book)} className={styles.addMinus}>+</div>
          {price && <div className={styles.bookPrice}>${(price * countOfItem).toFixed(2)}</div>}

        </div>
      </div>
      <div className={styles.line}>
         <HorizontalLine />
      </div>
    </>
  )
}

export default CartItem;
