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
    <div className='wrapper'>
      <div className='home'>
        <div className='home__container flow'>
          <div className='banner'>
            <h1 className='banner__title'>
              Backend Software Engineer & Technical Writer
            </h1>
            <p className='banner__text'>
              Hi, I'm Khwilo Kabaka. I specialize in backend software development using Spring Boot.
            </p>
          </div>

          <div className='portfolio nav'>
            <ul className='nav__list'>
              <li className='nav__item'>
                <a
                  aria-label='resume'
                  className='nav__link'
                  href='https://drive.google.com/file/d/1_Y45kRZ0jogzU9FN5Z26PnEi1eVPURRp/view?usp=sharing'
                  target='_blank'
                  rel='noreferrer noopener'
                >
                  <FontAwesomeIcon icon={faFileAlt} color='#707070' />
                </a>
              </li>
              <li className='nav__item'>
                <a
                  aria-label='LinkedIn'
                  className='nav__link'
                  href='https://www.linkedin.com/in/khwilo-watai'
                  target='_blank'
                  rel='noreferrer noopener'
                >
                  <FontAwesomeIcon icon={faLinkedin} color='#0077B5' />
                </a>
              </li>
              <li className='nav__item'>
                <a
                  aria-label='GitHub'
                  className='nav__link'
                  href='https://github.com/khwilo'
                  target='_blank'
                  rel='noreferrer noopener'
                >
                  <FontAwesomeIcon icon={faGithub} color='#131313' />
                </a>
              </li>
              <li className='nav__item'>
                <a
                  aria-label='e-mail'
                  className='nav__link'
                  href='mailto:khwilowatai@gmail.com'
                  target='_blank'
                  rel='noreferrer noopener'
                >
                  <FontAwesomeIcon icon={faEnvelope} color='#E94034' />
                </a>
              </li>
              <li className='nav__item'>
                <a
                  aria-label='WhatsApp'
                  className='nav__link'
                  href='https://api.whatsapp.com/send?phone=+254718802061'
                  target='_blank'
                  rel='noreferrer noopener'
                >
                  <FontAwesomeIcon icon={faWhatsapp} color='#00AA00' />
                </a>
              </li>
              <li className='nav__item'>
                <a
                  aria-label='Twitter'
                  className='nav__link'
                  href='https://twitter.com/khwilo'
                  target='_blank'
                  rel='noreferrer noopener'
                >
                  <FontAwesomeIcon icon={faTwitter} color='#50ABF1' />
                </a>
              </li>
            </ul>
          </div>

          <section className='writing'>
            <h2 className='writing__title'>Writing</h2>
            <ul className='writing__list'>
              <li className='articles-host'>
                <a
                  className='articles-host__link'
                  href='https://developers.decoded.africa/author/khwilo/'
                  target='_blank'
                  rel='noreferrer noopener'
                >
                  @decoded.africa/khwilo
                </a>
              </li>
              <li className='articles-host'>
                <a
                  className='articles-host__link'
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

        <div className='illustration'>
          <img
            src='images/progressive_app.svg'
            alt='desktop personal computer and mobile phone'
          />
        </div>
      </div>
    </div>
  );
}
