import React from 'react';

import About from '../../components/About/About';
import Posts from '../Posts/Posts';
import Projects from '../Projects/Projects';

const Main = () => {
  return (
    <main className='section-wrapper main'>
      <div className='container'>
        <About />
        <Projects />
        <Posts />
      </div>
    </main>
  );
};

export default Main;
