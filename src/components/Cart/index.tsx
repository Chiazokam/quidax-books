import React, { useState } from 'react';
import styles from './Cart.module.css';
import { ReactComponent as CartIcon } from '../../assets/whitecart.svg';
import CartHeader from './CartHeader/CartHeader';
import CartItem from './CartItem/CartItem';
import Button from '../Button';
import { Books } from '../../generated/graphql'

type CartProps = {
  closeCart: React.MouseEventHandler<HTMLDivElement>;
  isCartOpen: Boolean;
  selectedBooks: Books[];
  removeItemFromCart: Function;
  updateAvailableCopies: Function;
}

const Cart = ({ closeCart, isCartOpen, selectedBooks, removeItemFromCart, updateAvailableCopies }: CartProps) => {
  const [subtotal, setSubtotal] = useState(0);

  const addAllCartPrices = (itemPrice: number) => {
    // const priceSum = subtotal;
    // const price = getPrice();
    setSubtotal(subtotal + itemPrice);
  }

  return (
    <div className={`${styles.cartWrapper} ${isCartOpen && styles.slideIn}`}>
      <CartHeader closeCart={closeCart} />
      <div className={styles.itemsWrapper}>
      {selectedBooks.length > 0 ? selectedBooks.map((book: Books) => {
        return (
          <CartItem
            key={book.id}
            book={book}
            removeItemFromCart={removeItemFromCart}
            updateAvailableCopies={updateAvailableCopies}
            addAllCartPrices={addAllCartPrices}
          />
        )
      }) : 
        <div className={styles.empty}>No books in your cart</div>
      }
        {selectedBooks.length > 0 &&
        <>
          <div className={styles.total}> 
            <div className={styles.subtotal}>Subtotal</div>
            <div className={styles.subtotalValue}>${subtotal.toFixed(2)}</div>
          </div>
          <Button size='bg' text='Proceed To Checkout' />
        </>
      }
      </div>
    </div>
  )
}

export default Cart;
