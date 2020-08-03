import styled from 'styled-components';

const Project = ({ title, descriptionTag, image, link }) => {
  return (
    <ProjectWrapper className='project'>
      <ProjectImageWrapper>
        <a href={link} className='project__item' aria-label='project item'>
          <img src={`/images/${image}`} alt='' className='project__image' />
        </a>
      </ProjectImageWrapper>
      <div className='project__description center'>
        <h3 className='project__description-title'>{title}</h3>
        <p className='project__description-tag secondary-text'>
          {descriptionTag}
        </p>
      </div>
    </ProjectWrapper>
  );
};

const ProjectWrapper = styled.article`
  .project + .project {
    margin-top: 1.5em;
  }

  .project__description-title {
    text-transform: uppercase;
  }

  @media (min-width: 35em) {
    .project + .project {
      margin-top: 0;
    }
  }
`;

const ProjectImageWrapper = styled.div`
  position: relative;
  border: 4px solid var(--clr-white);
  overflow: hidden;

  .project__item {
    background: var(--clr-project-item);
  }

  .project__image {
    display: flex;
    height: 20rem;
    object-fit: cover;
    object-position: top left;
    transition: transform 750ms cubic-bezier(0.5, 0, 0.5, 1),
      opacity 250ms linear;
  }

  @media (min-width: 40em) {
    .project__image {
      height: 15rem;
    }
  }

  .project__item:focus {
    position: relative;
    z-index: 2;
  }

  .project__image:hover,
  .project__item:focus .project__image {
    transform: scale(1.2);
    opacity: 0.75;
  }
`;

export default Project;
