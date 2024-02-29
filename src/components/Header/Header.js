import React from 'react';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';

import './Header.css';

function Header() {
  return (
    <motion.div
      className="Header"
      initial={{ opacity: 0, x: -500 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
    >
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
    </motion.div>
  );
}

export default Header;
