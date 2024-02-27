import React from 'react';
import Book from '../Book/Book';
import './Bookshelf.css';

import data from '../book-data.json';

function Bookshelf() {
  // deconstruct inside the map
  const books = data.map(({ id, title, author, image, review }) => {
    return (
      <Book
        id={id}
        key={id}
        title={title}
        author={author}
        image={image}
        review={review}
      />
    );
  });

  return <div className="Bookshelf">{books}</div>;
}

export default Bookshelf;
