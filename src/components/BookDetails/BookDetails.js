import React from 'react';
import { useParams } from 'react-router';
import { useState } from 'react';
import data from '../../book-data.js';

import './BookDetail.css';

function BookDetails(props) {
  const [stateData, setStateData] = useState(data);

  const params = useParams();
  const { id } = params;
  const { title, author, image, review, read, stars, amazon_link } =
    data[id];

  const reviewStars = [];
  for (let i = 0; i < 5; i++) {
    if (i < stars) {
      reviewStars.push(
        <img
          id={i}
          src={`${process.env.PUBLIC_URL}images/filledReviewStar.svg`}
          alt="Filled Review Star"
          onClick={() => {
            setStateData([
              ...stateData,
              (stateData[id]['stars'] = i + 1),
            ]);
          }}
        />
      );
    } else
      reviewStars.push(
        <img
          id={i}
          src={`${process.env.PUBLIC_URL}images/unfilledReviewStar.svg`}
          alt="Unfilled Review Star"
          onClick={() => {
            setStateData([
              ...stateData,
              (stateData[id]['stars'] = i + 1),
            ]);
          }}
        />
      );
  }

  return (
    <div>
      <div>
        <img
          src={`${process.env.PUBLIC_URL}images/${image}`}
          alt={title}
          width="300"
          height="300"
        />
      </div>

      <div>
        <h1>{title}</h1>
        <h2>Review {reviewStars}</h2>
        <p> by {author}</p>
        <p>{review}</p>
        <p>{read ? 'Read' : 'Have not Read'}</p>
        <button>
          <a href={amazon_link}>Buy On Amazon</a>
        </button>
      </div>
    </div>
  );
}

export default BookDetails;
