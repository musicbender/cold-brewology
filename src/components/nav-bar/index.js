import React from 'react';
import { NavLink } from 'react-router-dom';
import './nav-bar.scss';

export default (props) => {
  return (
     <div className="nav-bar">
      <ul className="nav-links">
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/brewers">Brewers</NavLink></li>
        <li><NavLink to="/books">Books</NavLink></li>
        <li><NavLink to="/accessories">Accessories</NavLink></li>
        <li><NavLink to="/">Contact</NavLink></li>
      </ul>
     </div>
  );
}
