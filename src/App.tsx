import React from 'react';

import Header from './components/Header';
import FeaturedBooks from './components/FeaturedBooks';
import Books from './components/Books';
import BookStats from './components/BookStats/BookStats';

function App() {
  return (
    <div>
      <Header />
      <FeaturedBooks />
      <Books />
    </div>
  );
}

export default App;
