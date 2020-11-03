import {
  faGithub,
  faLinkedin,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faFileAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Home() {
  return (
    <div className='home wrapper'>
      <div className='home__container flow'>
        <div className='banner'>
          <h1 className='banner__title'>
            Mobile Web Application Developer & Technical Writer
          </h1>
          <p className='banner__text'>
            Hi, I'm Khwilo Kabaka. I specialize in frontend development with
            React, mobile application development with React Native, and
            server-side development with Node.js and Express.
          </p>
        </div>

        <div className='portfolio nav'>
          <ul className='nav__list'>
            <li className='nav__item'>
              <a className='nav__link' href='#'>
                <FontAwesomeIcon icon={faFileAlt} />
              </a>
            </li>
            <li className='nav__item'>
              <a className='nav__link' href='#'>
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </li>
            <li className='nav__item'>
              <a className='nav__link' href='#'>
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </li>
            <li className='nav__item'>
              <a className='nav__link' href='#'>
                <FontAwesomeIcon icon={faEnvelope} />
              </a>
            </li>
            <li className='nav__item'>
              <a className='nav__link' href='#'>
                <FontAwesomeIcon icon={faTwitter} />
              </a>
            </li>
          </ul>
        </div>

        <section className='writing'>
          <h2 className='writing__title'>Writing</h2>
          <ul className='writing__list'>
            <li className=''>
              <a href='#'>@decoded.africa/khwilo</a>
            </li>
            <li className=''>
              <a href='#'>@dev.to/khwilo</a>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
