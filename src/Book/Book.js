import React from 'react';
import './Book.css';

function Book(props) {
  const { title, author, image, review } = props;
  return (
    <div className="Book">
      <img
        src={`${process.env.PUBLIC_URL}/images/${image}`}
        alt="Testing"
        width="300"
        height="300"
      />
      <h1>{title}</h1>
      <h2>{author}</h2>
      <div>{review}</div>
    </div>
  );
}

export default Book;
