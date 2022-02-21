import React from 'react';

import Header from './components/Header';
import FeaturedBooks from './components/FeaturedBooks';
import { books } from './utils/dummyBooks';

const App = () => {

  return (
    <div>
      <Header />
      <FeaturedBooks books={books} />
    </div>
  );
}

export default App;
