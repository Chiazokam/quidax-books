import React from 'react'
import styles from './DetailsView.module.css';
import LeftPane from './LeftPane/LeftPane';
import RightPane from './RightPane/RightPane';

type DetailsViewProps = {
  book: BookType | undefined;
  openCart: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

const DetailsView = ({ book, openCart }: DetailsViewProps) => {

  return (
    <div className={styles.container}>
      {book && <LeftPane book={book} openCart={openCart} />}
      {book && <RightPane book={book}/>}
    </div>
  )
}

export default DetailsView;
