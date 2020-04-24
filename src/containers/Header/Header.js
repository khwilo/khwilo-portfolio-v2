import React from 'react';

import Banner from '../../components/Banner/Banner';
import TopNav from '../../components/TopNav/TopNav';

const Header = () => {
  return (
    <header className='section-wrapper header'>
      <div className='container'>
        <TopNav />
        <Banner />
      </div>
    </header>
  );
};

export default Header;
