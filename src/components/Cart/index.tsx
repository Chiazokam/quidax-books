import React from 'react';
import styles from './Cart.module.css';
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
  return (
    <div className={`${styles.cartWrapper} ${isCartOpen && styles.slideIn}`}>
      <CartHeader closeCart={closeCart} />
      {selectedBooks.map((book: CartItem) => {
        return (
          <CartItem
            book={book}
            removeItemFromCart={removeItemFromCart}
            updateAvailableCopies={updateAvailableCopies}
          />
        )
      })}
    </div>
  )
}

export default Cart;
