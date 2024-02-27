import React from 'react';
import { useParams } from 'react-router';
import data from '../book-data.json';

function BookDetails(props) {
  const params = useParams();
  const { id } = params;
  const { title, author, image, review, read, stars, amazon_link } =
    data[id];

  return (
    <div>
      <div>
        <img
          src={`${process.env.PUBLIC_URL}images/${image}`}
          alt={title}
        />
      </div>

      <div>
        <h1>{title}</h1>
        <p> by {author}</p>
        <p>{review}</p>
        <p>{read ? 'Read' : 'Have not Read'}</p>
        <p>{stars}</p>
        <button>
          <a href={amazon_link}>Buy On Amazon</a>
        </button>
      </div>
    </div>
  );
}

export default BookDetails;
