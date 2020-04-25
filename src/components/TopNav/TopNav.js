import React from 'react';

const TopNav = () => {
  return (
    <nav className='nav'>
      <ul className='nav__list'>
        <li className='nav__item'>
          <a href='/' className='nav-link'>
            Home
          </a>
        </li>
        <li className='nav__item'>
          <a href='#about' className='nav-link'>
            About
          </a>
        </li>
        <li className='nav__item'>
          <a href='#projects' className='nav-link'>
            Projects
          </a>
        </li>
        <li className='nav__item'>
          <a href='#writing' className='nav-link'>
            Writing
          </a>
        </li>
        <li className='nav__item'>
          <a href='#contact' className='nav-link'>
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default TopNav;
