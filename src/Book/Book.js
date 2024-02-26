import React from 'react';

function Book(props) {
  const { title, author, image, review } = props;
  return (
    <div className="Book">
      <img
        src={`${process.env.PUBLIC_URL}/images/${image}`}
        width="300"
        alt="Testing"
      />
      <h1>{title}</h1>
      <h2>{author}</h2>
      <div>{review}</div>
    </div>
  );
}

export default Book;
