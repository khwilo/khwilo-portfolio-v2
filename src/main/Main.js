import React from 'react';

import About from '../about/About';
import './Main.css';
import Projects from "../projects/Projects";

function Main() {
  return (
    <main className="main">
      <About />
      <Projects />
    </main>
  );
}

export default Main;
