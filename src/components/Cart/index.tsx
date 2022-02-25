import React, { useState, useContext, useEffect } from 'react';
import styles from './Cart.module.css';
import CartHeader from './CartHeader/CartHeader';
import CartItem from './CartItem/CartItem';
import Button from '../Button';
import { Books } from '../../generated/graphql'
import { CartContext } from '../../contexts/CartContext'

type CartProps = {
  closeCart: React.MouseEventHandler<HTMLDivElement>;
  isCartOpen: Boolean;
  books: Books[];
}

const Cart = ({ closeCart, isCartOpen, books }: CartProps) => {
  const [booksMap, setBooksMap] = useState(new Map());

  const cartContext = useContext(CartContext);

  useEffect(() => {
    const selectedBooksMap: any = new Map();
    Object.entries(cartContext.cartObject).forEach(([key, value]) => {
      const book = books.find(book => book.id === key);
      selectedBooksMap.set(book, value)
    })
    setBooksMap(selectedBooksMap);
  }, [cartContext.cartObject, books])

  return (
    <div className={`${styles.cartWrapper} ${isCartOpen && styles.slideIn}`}>
      <CartHeader closeCart={closeCart} />
      <div className={styles.itemsWrapper}>
      {booksMap.size > 0 ? Array.from(booksMap.entries()).map((book) => {
        return (
          <CartItem
            key={book[0].id}
            book={book[0]}
            countOfItem={book[1]}
          />
        )
      }) : 
        <div className={styles.empty}>No books in your cart</div>
      }
        {booksMap.size > 0 &&
        <>
          <div className={styles.total}> 
            <div className={styles.subtotal}>Subtotal</div>
            <div className={styles.subtotalValue}>${cartContext.totalPrice.toFixed(2)}</div>
          </div>
          <Button size='bg' text='Proceed To Checkout' />
        </>
      }
      </div>
    </div>
  )
}

export default Cart;
