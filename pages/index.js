import {
  faGithub,
  faLinkedin,
  faTwitter,
  faWhatsapp,
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
              <a
                className='nav__link'
                href='https://drive.google.com/file/d/1_Y45kRZ0jogzU9FN5Z26PnEi1eVPURRp/view?usp=sharing'
                target='_blank'
                rel='noreferrer noopener'
              >
                <FontAwesomeIcon icon={faFileAlt} />
              </a>
            </li>
            <li className='nav__item'>
              <a
                className='nav__link'
                href='https://www.linkedin.com/in/khwilo-watai'
                target='_blank'
                rel='noreferrer noopener'
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </li>
            <li className='nav__item'>
              <a
                className='nav__link'
                href='https://github.com/khwilo'
                target='_blank'
                rel='noreferrer noopener'
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </li>
            <li className='nav__item'>
              <a
                className='nav__link'
                href='mailto:khwilowatai@gmail.com'
                target='_blank'
                rel='noreferrer noopener'
              >
                <FontAwesomeIcon icon={faEnvelope} />
              </a>
            </li>
            <li className='nav__item'>
              <a
                className='nav__link'
                href='https://api.whatsapp.com/send?phone=+254718802061'
                target='_blank'
                rel='noreferrer noopener'
              >
                <FontAwesomeIcon icon={faWhatsapp} />
              </a>
            </li>
            <li className='nav__item'>
              <a
                className='nav__link'
                href='https://twitter.com/khwilo'
                target='_blank'
                rel='noreferrer noopener'
              >
                <FontAwesomeIcon icon={faTwitter} />
              </a>
            </li>
          </ul>
        </div>

        <section className='writing'>
          <h2 className='writing__title'>Writing</h2>
          <ul className='writing__list'>
            <li className=''>
              <a
                href='https://developers.decoded.africa/author/khwilo/'
                target='_blank'
                rel='noreferrer noopener'
              >
                @decoded.africa/khwilo
              </a>
            </li>
            <li className=''>
              <a
                href='https://dev.to/khwilo'
                target='_blank'
                rel='noreferrer noopener'
              >
                @dev.to/khwilo
              </a>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
