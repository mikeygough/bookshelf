import React from 'react';
import { useParams } from 'react-router';
import { useState } from 'react';
import { motion } from 'framer-motion';
import data from '../../book-data.js';

import './BookDetail.css';

function BookDetails(props) {
  const [stateData, setStateData] = useState(data);

  const params = useParams();
  const { id } = params;
  const {
    title,
    author,
    image,
    review,
    read,
    stars,
    amazon_link,
    quotes,
  } = data[id];

  const reviewStars = [];
  for (let i = 0; i < 5; i++) {
    if (i < stars) {
      reviewStars.push(
        <img
          key={i}
          id={i}
          src={`${process.env.PUBLIC_URL}/images/filledReviewStar.svg`}
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
          key={i}
          id={i}
          src={`${process.env.PUBLIC_URL}/images/unfilledReviewStar.svg`}
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
    <motion.div
      className="BookDetail"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1, x: 0 }}
      transition={{ duration: 0.75 }}
    >
      <div>
        <img
          src={`${process.env.PUBLIC_URL}/images/${image}`}
          alt={title}
          width="300"
          height="300"
        />
      </div>

      <div>
        <h1>{title}</h1>
        <h2> by {author}</h2>
        <p>{read ? '' : "Haven't read this one yet!"}</p>
        {read && (
          <>
            <p>{reviewStars}</p>
            <p>
              <strong>My Thoughts:</strong> {review}
            </p>
            <strong>Quotes I like:</strong>{' '}
            <figure>
              {quotes.map((quote, index) => (
                <blockquote key={index}>{quote}</blockquote>
              ))}
            </figure>
          </>
        )}

        <button>
          <a href={amazon_link} rel={'noopener'}>
            Buy On Amazon
          </a>
        </button>
      </div>
    </motion.div>
  );
}

export default BookDetails;
