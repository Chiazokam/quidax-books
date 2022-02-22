import React, { useState } from 'react';
import styles from './Cart.module.css';
import { ReactComponent as CartIcon } from '../../assets/whitecart.svg';
import CartHeader from './CartHeader/CartHeader';
import CartItem from './CartItem/CartItem';

type CartProps = {
  closeCart: React.MouseEventHandler<HTMLDivElement>;
  isCartOpen: Boolean;
  selectedBooks: CartItem[];
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
      {selectedBooks.length > 0 ? selectedBooks.map((book: CartItem) => {
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
        <button className={styles.button}>
          <CartIcon className={styles.cart} />
          <span>Proceed To Checkout</span>
        </button>
      </>
      }
    </div>
  )
}

export default Cart;
