import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  HashRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import About from './About/About';
import Bookshelf from './Bookshelf/Bookshelf';
import BookDetails from './BookDetails/BookDetails';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/" element={<Bookshelf />} />
        <Route path="about" element={<About />} />
        <Route path="details/:id" element={<BookDetails />} />
      </Route>
    </Routes>
  </Router>
);
