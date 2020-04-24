import React from 'react';

import Project from '../../components/Project/Project';

const Projects = () => {
  const projectList = [
    {
      title: 'Countries Info',
      descriptionTag: 'Responsive Design, Grid Layout, Themes, PWA',
      image: 'countries-info.png',
      link: 'https://countries-info.netlify.app/countries',
    },
    {
      title: 'Questioner API',
      descriptionTag: 'REST API, Flask, PostgreSQL',
      image: 'questioner-api.png',
      link: 'https://q-questioner-api.herokuapp.com/apidocs/',
    },
    {
      title: 'Chill Room',
      descriptionTag: 'Responsive Design, Grid Layout',
      image: 'chill-room.png',
      link: 'https://chill-room.netlify.com/',
    },
  ];

  const projectsView = projectList.map(
    ({ title, descriptionTag, image, link }, index) => {
      return (
        <Project
          key={index}
          title={title}
          descriptionTag={descriptionTag}
          image={image}
          link={link}
        />
      );
    }
  );

  return (
    <section id='projects' className='section__main projects'>
      <h2 className='heading projects__heading'>Projects</h2>

      <div className='projects__wrapper'>{projectsView}</div>
    </section>
  );
};

export default Projects;
