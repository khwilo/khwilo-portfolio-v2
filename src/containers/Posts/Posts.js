import React from 'react';

const Posts = () => {
  return (
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
            <h3 className='post_title'>Display a user's password on input</h3>
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
  );
};

export default Posts;
