import React from 'react';
import Book from './Book/Book';

const Books = () => {
  return (
    <Book
      bookTitle= 'Big Magic'
      author='Elizabeth Gilbert'
      year='2019'
      genre='Motivational'
      numberOfPurchases={14}
      likes={11}
      rating={4.0}
      price={29.99}
      availableCopies={23}
    />
  )
}

export default Books
