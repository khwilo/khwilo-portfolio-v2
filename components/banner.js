import styled from 'styled-components';

const Banner = () => {
  return (
    <BannerWrapper>
      <Profile>
        <img
          className='profile-image'
          src='/images/khwilo-portrait.jpeg'
          alt='Khwilo Kabaka portrait'
        />
      </Profile>
      <Intro>
        <h1 className='intro__name'>Hi, I'm Khwilo Kabaka</h1>
        <div className='intro__details'>
          <p className='intro__profession'>Mobile Web Application Developer</p>
          <a href='mailto:khwilowatai@gmail.com' className='email-address'>
            khwilowatai@gmail.com
          </a>
        </div>
      </Intro>
    </BannerWrapper>
  );
};

const BannerWrapper = styled.section`
  padding: 1.5em 0;

  .profile-image {
    border: 3px solid var(--clr-medium-green);
  }

  @media (min-width: 35em) {
    display: flex;
    width: 100%;
  }
`;

const Profile = styled.div`
  width: 60%;
  margin: 0 auto;

  @media (min-width: 35em) {
    width: 40%;
    margin: 0 0 0 auto;
    order: 2;
  }

  .profile-image {
    border: 3px solid var(--clr-medium-green);
  }
`;

const Intro = styled.div`
  text-align: center;

  .intro__profession {
    display: inline-block;
    margin: 1rem auto;
    padding: 0.2em 0.5em;
    background-color: var(--clr-gold);
    border-bottom: 4px solid var(--clr-green);
    font-weight: bold;
    font-size: 1.2rem;
  }

  .email-address {
    display: inline-block;
    font-weight: bold;
    padding: 0.2em;
    transition: background-color 0.6s cubic-bezier(0.87, 0, 0.13, 1),
      color 0.4s 0.3s ease-in;
  }

  .email-address:hover {
    background-color: var(--clr-medium-green);
    box-shadow: 0 10px 6px -6px var(--clr-box-shadow);
    color: var(--clr-white);
  }

  @media (min-width: 35em) {
    width: 50%;
    align-self: center;
    text-align: initial;
    order: 1;

    .intro__details {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .intro__profession {
      margin: 1rem 0;
      width: initial;
    }
  }
`;

export default Banner;
