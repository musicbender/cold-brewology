import React from 'react';
import { NavLink } from 'react-router-dom';
import { main as content } from '../../constants/content/nav';
import './nav-bar.scss';

export default (props) => {
  const getNavItems = () => {
    return (
      content.map((item, i) => {
        const path = item !== "home" ? `/${item}` : "/";
        return [
          <li key={Math.random()}><NavLink to={path}>{item}</NavLink></li>,
          <li key={Math.random()}>/</li>
        ];
      })
    );
  }

  return (
     <header className="main-header">
      <nav className="main-navigation">
        <ul className="nav-links">
          { getNavItems() }
        </ul>
      </nav>
     </header>
  );
}
