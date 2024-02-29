import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './Book.css';

function Book(props) {
  const { id, title, author, image } = props;
  return (
    <motion.div className="Book">
      <Link to={`/details/${id}`}>
        <img
          src={`${process.env.PUBLIC_URL}/images/${image}`}
          alt={title}
          width="300"
          height="300"
        />
      </Link>
      <Link to={`/details/${id}`}>
        <h1>{title}</h1>
      </Link>
      <h2>{author}</h2>
    </motion.div>
  );
}

export default Book;
