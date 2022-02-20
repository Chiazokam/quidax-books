import React from 'react';
import book from '../../../assets/book.jpg';
import styles from './Book.module.css';
import BookStats from '../../BookStats/BookStats';
import Cart from '../../Cart/Cart';

type BookProps = {
  bookTitle: String;
  author: String;
  year: String;
  genre: String;
  numberOfPurchases: Number;
  likes: Number;
  rating: Number;
  price: Number;
  availableCopies: Number;
}

const Book = (props: BookProps) => {
  const { bookTitle, author, year, genre, numberOfPurchases, likes, rating, price, availableCopies } = props;

  return (
    <div className={styles.itemWrapper}>
      <div className={styles.image}><img alt='book' src={book} className={styles.bookImage}/></div>
      <div className={styles.bookDescription}>
        <div className={styles.bookTitle}>{bookTitle}</div>
        <div className={styles.author}>{author} - {year}</div>
        <div className={styles.genre}>{genre}</div>

        <BookStats numberOfPurchases={numberOfPurchases} likes={likes} rating={rating} hasBlackIcons/>
        
        <div className={styles.price}>
          ${price} 
          {availableCopies === 0 ? <span className={styles.noCopies}>Out of Stock</span> : <span className={styles.copies}>{availableCopies} Copies Available</span>}
        </div>
        {availableCopies > 0 &&
          <div className={styles.cart}>
            <Cart size='small'/>
            <span className={styles.addToCart}>Add to Cart</span>
          </div>
        }
      </div>
    </div>
  )
}

export default Book;
