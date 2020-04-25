import React from 'react';

const Project = ({ title, descriptionTag, image, link }) => {
  return (
    <article className='project'>
      <div className='project__image-wrapper'>
        <a href={link} className='project__item' aria-label='project item'>
          <img src={`/images/${image}`} alt='' className='project__image' />
        </a>
      </div>
      <div className='project__description center'>
        <h3 className='project__description-title'>{title}</h3>
        <p className='project__description-tag secondary-text'>
          {descriptionTag}
        </p>
      </div>
    </article>
  );
};

export default Project;
