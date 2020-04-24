import React from 'react';

const Projects = () => {
  return (
    <section id='projects' className='section__main projects'>
      <h2 className='heading projects__heading'>Projects</h2>

      <div className='projects__wrapper'>
        <article className='project'>
          <div className='project__image-wrapper'>
            <a
              href='https://countries-info.netlify.app/countries'
              className='project__item'
              aria-label='project item'
            >
              <img
                src='/images/countries-info.png'
                alt=''
                className='project__image'
              />
            </a>
          </div>
          <div className='project__description'>
            <h3 className='project__description-title'>Countries Info</h3>
            <p className='project__description-tag'>
              Responsive Design, Grid Layout, Themes, PWA
            </p>
          </div>
        </article>

        <article className='project'>
          <div className='project__image-wrapper'>
            <a
              href='https://q-questioner-api.herokuapp.com/apidocs/'
              className='project__item'
              aria-label='project item'
            >
              <img
                src='/images/questioner-api.png'
                alt=''
                className='project__image'
              />
            </a>
          </div>
          <div className='project__description'>
            <h3 className='project__description-title'>Questioner API</h3>
            <p className='project__description-tag'>
              REST API, Flask, PostgreSQL
            </p>
          </div>
        </article>

        <article className='project'>
          <div className='project__image-wrapper'>
            <a
              href='https://chill-room.netlify.com/'
              className='project__item'
              aria-label='project item'
            >
              <img
                src='/images/chill-room.png'
                alt=''
                className='project__image'
              />
            </a>
          </div>
          <div className='project__description'>
            <h3 className='project__description-title'>Chill Room</h3>
            <p className='project__description-tag'>
              Responsive Design, Grid Layout
            </p>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Projects;
