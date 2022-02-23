import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { useBookQuery, Books } from '../../generated/graphql';
import DetailsViewComponent from '../../components/DetailsView';

type DetailsViewProps = {
  openCart: React.MouseEventHandler<HTMLDivElement>;
}

const DetailsView = ({ openCart }: DetailsViewProps) => {
  const { id } = useParams();
  const [book, setBook] = useState<Books>()
  const { loading, data } = useBookQuery({
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
        openCart={openCart as unknown as React.MouseEventHandler<HTMLButtonElement> | undefined}
      />}

    </div>
  )
}

export default DetailsView;
