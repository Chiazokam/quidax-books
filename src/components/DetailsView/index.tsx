import React from 'react'
import styles from './DetailsView.module.css';
import LeftPane from './LeftPane/LeftPane';
import { Books } from '../../generated/graphql';
import RightPane from './RightPane/RightPane';

type DetailsViewProps = {
  book: Books;
  openCart: () => void;
}

const DetailsView = ({ book, openCart }: DetailsViewProps) => {

  return (
    <div className={styles.container}>
      <LeftPane book={book} openCart={openCart} />
      <RightPane book={book}/>
    </div>
  )
}

export default DetailsView;
