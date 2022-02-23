import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { useBookQuery, Books } from '../../generated/graphql';
import Header from '../../components/Header';
import DetailsViewComponent from '../../components/DetailsView';

type DetailsViewProps = {
  openCart: React.MouseEventHandler<HTMLDivElement>;
}

const DetailsView = ({ openCart }: DetailsViewProps) => {
  const { id } = useParams();
  const [book, setBook] = useState()
  const { loading, error, data } = useBookQuery({
    variables: { id: id as string }
  })

  useEffect(() => {
    if (data) {
      // @ts-ignore
      setBook(data.book)
    }
  }, [data])
  

  return (
    <div style={{ height: '100%' }}>
      <Header openCart={openCart} cartItemsCount={3} />

      {book && <DetailsViewComponent
        book={book}
        openCart={openCart as unknown as React.MouseEventHandler<HTMLButtonElement> | undefined}
      />}

    </div>
  )
}

export default DetailsView;
