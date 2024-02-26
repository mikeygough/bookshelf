import React from 'react';
import Book from '../Book/Book';

function Bookshelf() {
  return (
    <div className="Bookshelf">
      <Book
        title="The Box"
        author="Marc Levinson"
        image="the-box-by-marc-levinson.jpg"
        review="Really good!"
      />
      <Book
        title="Code Complete"
        author="Steve McConnell"
        image="code-complete-by-steve-mcconnell.jpg"
        review="A little much!"
      />
    </div>
  );
}

export default Bookshelf;
