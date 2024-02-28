import React from 'react';
import { NavLink } from 'react-router-dom';

import './Header.css';

function Header() {
  return (
    <div className="Header">
      <header>
        <h1>Bookshelf</h1>
        <h2>A Bookshelf... You know, but it's virtual!</h2>

        <div>
          <NavLink
            className={({ isActive }) =>
              isActive ? 'nav-link-active' : 'nav-link'
            }
            to="/"
          >
            Bookshelf
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? 'nav-link-active' : 'nav-link'
            }
            to="/about"
          >
            About
          </NavLink>
        </div>
      </header>
    </div>
  );
}

export default Header;
