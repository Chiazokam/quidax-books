import React from 'react'
import { ReactComponent as CartSvg } from '../../assets/cart.svg';
import styles from './Cart.module.css'

type CartProps = {
  withItemCount?: Boolean;
  itemCount?: number;
  size?: String
}

const Cart = ({ withItemCount, itemCount, size }: CartProps ) => {
  return (
    <div className={`${styles.cart} ${size === 'small' && styles.smallCart}`}>
      {withItemCount && <span className={styles.itemCount}>{itemCount}</span>}
      <CartSvg />
    </div>
  )
}

export default Cart;
