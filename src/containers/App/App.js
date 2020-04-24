import React from 'react';
import './App.css';

function App() {
  return (
    <div className='container'>
      <header className='section-wrapper header'>
        <nav className='nav'>
          <ul className='nav__list'>
            <li className='nav__item'>
              <a href='/' className='nav__link'>
                Home
              </a>
            </li>
            <li className='nav__item'>
              <a href='#about' className='nav__link'>
                About
              </a>
            </li>
            <li className='nav__item'>
              <a href='#projects' className='nav__link'>
                Projects
              </a>
            </li>
            <li className='nav__item'>
              <a href='#writing' className='nav__link'>
                Writing
              </a>
            </li>
            <li className='nav__item'>
              <a href='#contact' className='nav__link'>
                Contact
              </a>
            </li>
          </ul>
        </nav>

        <section className='banner'>
          <div className='intro'>
            <h1 className='intro__name'>Hi, I'm Khwilo Kabaka</h1>
            <p className='intro__profession'>
              Mobile Web Application Developer
            </p>
            <a href='mailto:khwilowatai@gmail.com' className='email-address'>
              khwilowatai@gmail.com
            </a>
          </div>
          <div className='profile'>
            <img
              className='profile-image'
              src='/images/khwilo-portrait.jpeg'
              alt='Khwilo Kabaka portrait'
            />
          </div>
        </section>
      </header>

      <main className='section-wrapper main'>
        <section id='about' className='section__main about'>
          <h2 className='heading about__heading'>About Me</h2>
          <p>
            I am a software engineer with experience in the field of mobile web
            application development. I am passionate about bringing great
            experiences to users on the web by creating fast, responsive and
            interactive web applications. When not working, I enjoy using my
            time by sharing what I learn through writing technical articles and
            also assisting other developers in leveling up their skills.
          </p>
        </section>

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

        <section id='writing' className='section__main posts'>
          <h2 className='heading posts_heading'>Writing</h2>

          <div className='posts__wrapper'>
            <a
              href='https://dev.to/khwilo/til-form-password-reveal-g37'
              target='_blank'
              rel='noreferrer noopener'
              className='post__container-link'
              aria-label='published online content'
            >
              <article className='post'>
                <h3 className='post_title'>
                  Display a user's password on input
                </h3>
                <p className='post__date'>Feb 13, 2020</p>
              </article>
            </a>
            <a
              href='https://dev.to/khwilo/get-started-with-making-your-angular-web-app-offline-capable-1e9n'
              target='_blank'
              rel='noreferrer noopener'
              className='post__container-link'
              aria-label='published online content'
            >
              <article className='post'>
                <h3 className='post_title'>
                  Get started with making your Angular web app offline-capable
                </h3>
                <p className='post__date'>Feb 7, 2020</p>
              </article>
            </a>
            <a
              href='https://dev.to/khwilo/how-to-create-full-screen-drawer-navigation-in-html-css-and-javascript-44oe'
              target='_blank'
              rel='noreferrer noopener'
              className='post__container-link'
              aria-label='published online content'
            >
              <article className='post'>
                <h3 className='post_title'>
                  How to create full-screen drawer navigation in HTML, CSS, and
                  JavaScript
                </h3>
                <p className='post__date'>Jan 24, 2020</p>
              </article>
            </a>
          </div>
        </section>
      </main>

      <footer className='section-wrapper footer'>
        <section id='contact' className='section__footer contact'>
          <h2 className='heading contact__heading'>Contact</h2>
          <div className='contact__wrapper'>
            <p>&copy; 2020</p>
            <div className='contact__details'>
              <ul className='contact__list'>
                <li className='contact_item'>
                  <a
                    href='https://www.linkedin.com/in/khwilo-watai'
                    target='_blank'
                    rel='noreferrer noopener'
                    className='contact__link'
                  >
                    LinkedIn
                  </a>
                </li>
                <li className='contact_item'>
                  <a
                    href='https://github.com/khwilo'
                    target='_blank'
                    rel='noreferrer noopener'
                    className='contact__link'
                  >
                    GitHub
                  </a>
                </li>
                <li className='contact_item'>
                  <a
                    href='https://api.whatsapp.com/send?phone=+254718802061'
                    target='_blank'
                    rel='noreferrer noopener'
                    className='contact__link'
                  >
                    WhatsApp
                  </a>
                </li>
                <li className='contact_item'>
                  <a
                    href='https://twitter.com/khwilo'
                    target='_blank'
                    rel='noreferrer noopener'
                    className='contact__link'
                  >
                    Twitter
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </footer>
    </div>
  );
}

export default App;
