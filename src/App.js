import React from 'react';
import { Outlet } from 'react-router-dom';

import './App.css';
import Header from './Header/Header';
// import Bookshelf from './Bookshelf/Bookshelf';

function App() {
  return (
    <div className="App">
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
