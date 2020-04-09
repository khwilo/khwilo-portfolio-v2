import React from 'react';

import './Header.css';

function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__item">
            <a href="/" className="nav__link">Home</a>
          </li>
          <li className="nav__item">
            <a href="#about" className="nav__link">About</a>
          </li>
          <li className="nav__item">
            <a href="#projects" className="nav__link">Projects</a>
          </li>
          <li className="nav__item">
            <a href="#posts" className="nav__link">Posts</a>
          </li>
          <li className="nav__item">
            <a href="#contact" className="nav__link">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
