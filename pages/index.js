import Link from 'next/link';
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
              <Link href='#'>
                <a className='nav__link'>Resume</a>
              </Link>
            </li>
            <li className='nav__item'>
              <Link href='#'>
                <a className='nav__link'>LinkedIn</a>
              </Link>
            </li>
            <li className='nav__item'>
              <Link href='#'>
                <a className='nav__link'>GitHub</a>
              </Link>
            </li>
            <li className='nav__item'>
              <Link href='#'>
                <a className='nav__link'>Gmail</a>
              </Link>
            </li>
            <li className='nav__item'>
              <Link href='#'>
                <a className='nav__link'>Twitter</a>
              </Link>
            </li>
          </ul>
        </div>

        <section className='writing'>
          <h2 className='writing__title'>Writing</h2>
          <ul className='writing__list'>
            <li className=''>
              <Link href='#'>
                <a>@decoded.africa/khwilo</a>
              </Link>
            </li>
            <li className=''>
              <Link href='​#'>
                <a>@dev.to/khwilo</a>
              </Link>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
