import React from 'react';
import styles from './Book.module.css';
import BookStats from '../../BookStats/BookStats';
import Cart from '../../CartIcon/CartIcon';

type BookProps = {
  book: BookType;
  addToCart: (book: CartItem) => void;
}

const Book = ({ book, addToCart }: BookProps) => {
  const { id, title, author, release_date, genres, number_of_purchases, likes, rating, price, available_copies, image_url, currency } = book;

  const addBook = () => {
    addToCart({
      id,
      image_url,
      price,
      title,
      author,
      available_copies
    })
  }

  return (
    <div className={styles.itemWrapper}>
      <div className={styles.image}><img alt='book' src={image_url} className={styles.bookImage}/></div>
      <div className={styles.bookDescription}>
        <div className={styles.bookTitle}>{title}</div>
        <div className={styles.author}>{author} - {release_date}</div>
        <div className={styles.genre}>{genres.join(', ')}</div>

        <BookStats numberOfPurchases={number_of_purchases} likes={likes} rating={rating} hasBlackIcons/>
        
        <div className={styles.price}>
          {currency === 'NGN' ? <span>&#8358;</span> : '$'}{price} 
          {available_copies === 0 ? <span className={styles.noCopies}>Out of Stock</span> : <span className={styles.copies}>{available_copies} Copies Available</span>}
        </div>
        {available_copies > 0 &&
          <div className={styles.cart} onClick={addBook}>
            <Cart size='small'/>
            <span className={styles.addToCart}>Add to Cart</span>
          </div>
        }
      </div>
    </div>
  )
}

export default Book;
