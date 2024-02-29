import React from 'react';
import { useState } from 'react';
import { motion } from 'framer-motion';

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
    <motion.div
      className="Bookshelf-Wrapper"
      initial={{ opacity: 0, x: -500 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
    >
      <form>
        <input
          value={query}
          placeholder="Search for a Book!"
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      <motion.div
        className="Bookshelf"
        initial={{ opacity: 0, x: -500 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
      >
        {books.length > 0
          ? books
          : 'No Books Match Your Search Query...'}
      </motion.div>
    </motion.div>
  );
}

export default Bookshelf;
