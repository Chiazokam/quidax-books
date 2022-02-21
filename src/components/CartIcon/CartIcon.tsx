import React from 'react'
import { ReactComponent as CartSvg } from '../../assets/cart.svg';
import styles from './CartIcon.module.css'

type CartIconProps = {
  withItemCount?: Boolean;
  itemCount?: number;
  size?: String;
  openCart?: React.MouseEventHandler<HTMLDivElement>;
}

const CartIcon = ({ withItemCount, itemCount, size, openCart }: CartIconProps ) => {
  return (
    <div onClick={openCart} className={`${styles.cart} ${size === 'small' && styles.smallCart}` }>
      {withItemCount && <span className={styles.itemCount}>{itemCount}</span>}
      <CartSvg />
    </div>
  )
}

export default CartIcon;
