import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import {
  HashRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import About from './components/About/About';
import Bookshelf from './components/Bookshelf/Bookshelf';
import BookDetails from './components/BookDetails/BookDetails';

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
