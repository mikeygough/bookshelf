import React from 'react';
import { useState } from 'react';
import Book from '../Book/Book';
import './Bookshelf.css';

import data from '../../book-data.js';

function Bookshelf() {
  const [query, setQuery] = useState('');

  const books = data
    .filter(
      (obj) =>
        obj.title.toLowerCase().includes(query.toLowerCase()) ||
        obj.author.toLowerCase().includes(query.toLowerCase())
    )
    .sort((a, b) => a.title.localeCompare(b.title))
    .map(({ id, title, author, image, review }) => {
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

  return (
    <div className="Bookshelf-Wrapper">
      <form>
        <input
          value={query}
          placeholder="Search for a Book!"
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      <div className="Bookshelf">
        {books.length > 0
          ? books
          : 'No Books Match Your Search Query...'}
      </div>
    </div>
  );
}

export default Bookshelf;
