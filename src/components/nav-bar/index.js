import React from 'react';
import { NavLink } from 'react-router-dom';

export default (props) => {
  return (
     <div className="nav-bar">
      <ul className="nav-links">
        <li><NavLink to="/" /></li>
        <li><NavLink to="/brewers" /></li>
        <li><NavLink to="/books" /></li>
        <li><NavLink to="/accessories" /></li>
      </ul>
     </div>
  );
}
