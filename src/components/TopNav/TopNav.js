import React from 'react';

const TopNav = () => {
  return (
    <nav className='nav'>
      <ul className='nav__list'>
        <li className='nav__item'>
          <a href='/' className='nav__link'>
            Home
          </a>
        </li>
        <li className='nav__item'>
          <a href='#about' className='nav__link'>
            About
          </a>
        </li>
        <li className='nav__item'>
          <a href='#projects' className='nav__link'>
            Projects
          </a>
        </li>
        <li className='nav__item'>
          <a href='#writing' className='nav__link'>
            Writing
          </a>
        </li>
        <li className='nav__item'>
          <a href='#contact' className='nav__link'>
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default TopNav;
