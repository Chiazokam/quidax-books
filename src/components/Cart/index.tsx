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
  removeItemFromCart: Function;
  updateAvailableCopies: Function;
}

const Cart = ({ closeCart, isCartOpen, books, removeItemFromCart, updateAvailableCopies }: CartProps) => {
  const [subtotal, setSubtotal] = useState(0);
  const [selectedBooks, setSelectedBooks] = useState<Books[]>([]);
  const [totalCartPrice, setTotalCartPrice] = useState(0)
  const [booksMap, setBooksMap] = useState(new Map());

  const cartContext = useContext(CartContext);

  useEffect(() => {
    const selectedBooksMap: any= new Map();
    let sum = 0;
    Object.entries(cartContext.cartObject).forEach(([key, value]) => {
      const book = books.find(book => book.id === key);
      selectedBooksMap.set(book, value)
    })
    setBooksMap(selectedBooksMap);
    cartContext.getBooksMap(booksMap);
    // booksMap.forEach((value, key, map) => {
    //   sum += (key.price * value);
    // });
    // setTotalCartPrice(() => sum);
  }, [cartContext.cartObject, books])

  const addAllCartPrices = (itemPrice: number) => {
    // const priceSum = subtotal;
    // const price = getPrice();
    setSubtotal(() => subtotal + itemPrice);
  }

  return (
    <div className={`${styles.cartWrapper} ${isCartOpen && styles.slideIn}`}>
      <CartHeader closeCart={closeCart} />
      <div className={styles.itemsWrapper}>
      {booksMap.size > 0 ? Array.from(booksMap.entries()).map((book) => {
        return (
          <CartItem
            key={book[0].id}
            book={book[0]}
            removeItemFromCart={removeItemFromCart}
            updateAvailableCopies={updateAvailableCopies}
            addAllCartPrices={addAllCartPrices}
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
            <div className={styles.subtotalValue}>${totalCartPrice.toFixed(2)}</div>
          </div>
          <Button size='bg' text='Proceed To Checkout' />
        </>
      }
      </div>
    </div>
  )
}

export default Cart;
