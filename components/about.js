import styled from 'styled-components';

const About = () => {
  return (
    <AboutWrapper id='about' className='section__main'>
      <h2 className='heading about__heading'>About Me</h2>
      <p>
        I am a software engineer with experience in the field of mobile web
        application development. I am passionate about bringing great
        experiences to users on the web by creating fast, responsive and
        interactive web applications. When not working, I enjoy using my time by
        sharing what I learn through writing technical articles and also
        assisting other developers in leveling up their skills.
      </p>
    </AboutWrapper>
  );
};

const AboutWrapper = styled.section`
  max-width: 750px;
`;

export default About;
