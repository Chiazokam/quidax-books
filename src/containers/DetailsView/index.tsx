import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import Header from '../../components/Header';
import DetailsViewComponent from '../../components/DetailsView';
import { books } from '../../utils/dummyBooks';

type DetailsViewProps = {
  openCart: React.MouseEventHandler<HTMLDivElement>;
}

const DetailsView = ({ openCart }: DetailsViewProps) => {
  const { id } = useParams();
  const [book, setBook] = useState<BookType>()

  useEffect(() => {
    const foundBook = books.find((book: BookType) => book.id === id)
    setBook(foundBook)
  }, [id])

  return (
    <div style={{ height: '100%' }}>
      <Header openCart={openCart} cartItemsCount={3} />

      <DetailsViewComponent book={book} openCart={openCart as unknown as React.MouseEventHandler<HTMLButtonElement> | undefined}/>

    </div>
  )
}

export default DetailsView;
