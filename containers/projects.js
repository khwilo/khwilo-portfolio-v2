import styled from 'styled-components';

import Project from '../components/project';

const Projects = () => {
  const projectList = [
    {
      title: 'Job Listings',
      descriptionTag: 'Responsive Design, Filter Search, Grid Layout, Flex',
      image: 'joblistings.png',
      link: 'https://joblistings.now.sh/',
    },
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

      <ProjectsWrapper>{projectsView}</ProjectsWrapper>
    </section>
  );
};

const ProjectsWrapper = styled.div`
  @media (min-width: 35em) {
    display: -ms-grid;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, auto));
    gap: 1em;
  }
`;

export default Projects;
