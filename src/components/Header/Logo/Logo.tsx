import React from 'react';
import logo from '../../../assets/logo.svg';
import styles from './Logo.module.css'

const Logo = () => {
  return (
    <div className={styles.logo}>
      <img src={logo} alt="logo" />
    </div>
  )
}

export default Logo;
