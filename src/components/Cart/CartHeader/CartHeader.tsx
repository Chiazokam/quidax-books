import React from 'react';
import Back from '../../Back/Back';
import styles from './CartHeader.module.css';
import { ReactComponent as CartIcon } from '../../../assets/cart.svg';

type CartHeaderProps = {
  closeCart: React.MouseEventHandler<HTMLDivElement>;
}

const CartHeader = ({ closeCart }: CartHeaderProps) => {
  return (
    <div className={styles.cartHeader}>
      <div className={styles.back}>
        <Back backFunction={closeCart} />
      </div>
      <div className={styles.yourCart}>
        <span className={styles.cartText}>Your Cart</span>
        <CartIcon className={styles.cartIcon} />
      </div>
    </div>
  )
}

export default CartHeader;
