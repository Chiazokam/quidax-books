import React from 'react'
import styles from './CartBackdrop.module.css';

type CartBackdropProps = {
  closeCart: React.MouseEventHandler<HTMLDivElement>;
}

const CartBackdrop = ({ closeCart }: CartBackdropProps) => {
  return (
    <div className={styles.cartBackdrop} onClick={closeCart}/>
  )
}

export default CartBackdrop;
