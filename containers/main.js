import styled from 'styled-components';

import About from '../components/about';
import Projects from '../containers/projects';
import Posts from '../containers/posts';

const Main = () => {
  return (
    <MainWrapper className='section-wrapper'>
      <div className='container'>
        <About />
        <Projects />
        <Posts />
      </div>
    </MainWrapper>
  );
};

const MainWrapper = styled.main`
  padding: 1.5em 0;
`;

export default Main;
