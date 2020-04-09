import React from "react";

import './About.css';

function About() {
  const name = "Khwilo Kabaka";
  const introText = "I am a software engineer by professional with a keen interest in the field of mobile web applications. I have worked primarily with technologies that enhance modern features of the web and I strive to make sure web users have a great experience while interacting with the applications that I create.";

  return (
    <section id="about" className="section section__about">
      <img src="images/khwilo-portrait.jpeg" alt="Khwilo's portrait" className="portrait-image" />
      <div className="profile">
        <h1>
          Hi, my name is <span className="name">{name}</span>
        </h1>
        <div className="profile__content">
          <p>{introText}</p>
        </div>
      </div>
    </section>
  );
}

export default About;
