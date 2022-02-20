import React from 'react'
import { ReactComponent as CartSvg } from '../../assets/cart.svg';
import styles from './Cart.module.css'

type CartProps = {
  withItemCount: Boolean;
  itemCount: number;
}

const Cart = ({ withItemCount, itemCount }: CartProps ) => {
  return (
    <div className={styles.cart}>
      <span className={styles.itemCount}>{itemCount}</span>
      <CartSvg />
    </div>
  )
}

export default Cart;
