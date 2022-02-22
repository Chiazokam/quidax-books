import React from 'react';
import { ReactComponent as CartIcon } from '../../assets/whitecart.svg';
import styles from './Button.module.css';

type ButtonProps = {
  size: string;
  text: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

const Button = ({ size, text, onClick }: ButtonProps) => {
  return (
    <button onClick={onClick} className={`${styles.button} ${size === 'bg' ? styles.bg : styles.sm}`}>
      <CartIcon className={styles.cart} />
      <span className={styles.text}>{text}</span>
    </button>
  )
}

export default Button;
