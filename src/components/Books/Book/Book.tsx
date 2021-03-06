import React, { useContext } from 'react';
import styles from './Book.module.css';
import BookStats from '../../BookStats/BookStats';
import Cart from '../../CartIcon/CartIcon';
import { getCurrency } from '../../../utils/getCurrency';
import { Books } from '../../../generated/graphql'
import { getYear } from '../../../utils/getYear';
import { sliceText } from '../../../utils/sliceText';
import { CartContext } from '../../../contexts/CartContext';

type BookProps = {
  book: Books;
  openCart: () => void;
  openBookDetails: Function;
}

const Book = ({ book, openCart, openBookDetails }: BookProps) => {
  const {
    id,
    title,
    authors,
    published_at,
    genres,
    number_of_purchases,
    likes,
    rating,
    price,
    available_copies,
    image_url,
    currency
  } = book;


  const cartContext = useContext(CartContext);

  const addBook = () => {
    openCart()
    cartContext.addSelectedBook(book)
  }

  const numberOfBooksInCart = cartContext.cartObject[id] || 0
  const copiesOfBook = available_copies && available_copies - numberOfBooksInCart;

  return (
    <div className={styles.itemWrapper}>
      <div onClick={() => openBookDetails(id)} className={styles.image}><img alt='book' src={image_url as string | undefined} className={styles.bookImage as string | undefined}/></div>
      <div className={styles.bookDescription}>
        {title && <div className={styles.bookTitle}>{sliceText(title, 26)}</div>}
        {authors && <div className={styles.author}>{sliceText(authors?.map(author => author?.name).join(', '), 26)} - {getYear(published_at)}</div>}
        {genres && <div className={styles.genre}>{sliceText(genres?.map(genre => genre?.name).join(', '), 26)}</div>}

        <BookStats numberOfPurchases={number_of_purchases} likes={likes} rating={rating} hasBlackIcons/>
        
        <div className={styles.price}>
          {getCurrency(currency)}{price} 
          {copiesOfBook === 0 ?
            <span className={styles.noCopies}>Out of Stock</span> : 
            <span className={styles.copies}>{copiesOfBook} {`Cop${copiesOfBook === 1 ? 'y' : 'ies'} Available`}</span>
          }
        </div>
        {(!!copiesOfBook && copiesOfBook > 0) &&
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
