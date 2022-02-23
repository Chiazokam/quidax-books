import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Books } from '../../../generated/graphql';
import { ReactComponent as Back } from '../../../assets/back.svg';
import Button from '../../Button';
import Skeleton from '../../Skeleton'
import { getCurrency } from '../../../utils/getCurrency';
import styles from './LeftPane.module.css';

type LeftPaneProps = {
  book: Books;
  openCart: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

const LeftPane = ({ book, openCart }: LeftPaneProps) => {
  const { image_url, title, available_copies, currency, price } = book;
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1)
  }

  return (
    <div className={styles.leftpane}>
      <div onClick={goBack} className={styles.back}>
        <Back className={styles.backIcon} />
        <span className={styles.backText}>Back</span>
      </div>
      <img className={styles.image} src={image_url as string} alt={title as string} />
      <div
        className={`${styles.availableCopies} ${!!available_copies && available_copies > 0 ? styles.available : styles.notAvailable}`}
      >
        {available_copies === 0 ? 'Out of Stock' : `${available_copies} Copies Available`}
      </div>
      <div className={styles.price}>{getCurrency(currency)}{price}</div>
      <Button onClick={openCart} size='sm' text='Add to Cart' />
    </div>
  )
}

export default LeftPane;
