import React from 'react';

const Banner = () => {
  return (
    <section className='banner'>
      <div className='intro'>
        <h1 className='intro__name'>Hi, I'm Khwilo Kabaka</h1>
        <p className='intro__profession'>Mobile Web Application Developer</p>
        <a href='mailto:khwilowatai@gmail.com' className='email-address'>
          khwilowatai@gmail.com
        </a>
      </div>
      <div className='profile'>
        <img
          className='profile-image'
          src='/images/khwilo-portrait.jpeg'
          alt='Khwilo Kabaka portrait'
        />
      </div>
    </section>
  );
};

export default Banner;
