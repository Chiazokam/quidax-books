import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { useBookQuery, Books } from '../../generated/graphql';
import DetailsViewComponent from '../../components/DetailsView';

type DetailsViewProps = {
  openCart: () => void;
}

const DetailsView = ({ openCart }: DetailsViewProps) => {
  const { id } = useParams();
  const [book, setBook] = useState<Books>()
  const { data } = useBookQuery({
    variables: { id: id as string }
  })

  useEffect(() => {
    if (data) {
      setBook(data?.book as Books)
    }
  }, [data])
  

  return (
    <div style={{ height: '100%' }}>
      {book && <DetailsViewComponent
        book={book}
        openCart={openCart}
      />}

    </div>
  )
}

export default DetailsView;
