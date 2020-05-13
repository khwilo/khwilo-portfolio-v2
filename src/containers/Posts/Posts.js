import React from 'react';

import Post from '../../components/Post/Post';
import './Posts.css';

const Posts = () => {
  const postsList = [
    {
      title: 'Getting started with forms in React',
      publishedDate: 'May 11, 2020',
      link: 'https://dev.to/khwilo/getting-started-with-forms-in-react-3h87',
    },
    {
      title: "Display a user's password on input",
      publishedDate: 'Feb 13, 2020',
      link: 'https://dev.to/khwilo/til-form-password-reveal-g37',
    },
    {
      title: 'Get started with making your Angular web app offline-capable',
      publishedDate: 'Feb 7, 2020',
      link:
        'https://dev.to/khwilo/get-started-with-making-your-angular-web-app-offline-capable-1e9n',
    },
    {
      title:
        'How to create full-screen drawer navigation in HTML, CSS, and JavaScript',
      publishedDate: 'Jan 24, 2020',
      link:
        'https://dev.to/khwilo/how-to-create-full-screen-drawer-navigation-in-html-css-and-javascript-44oe',
    },
  ];

  const postsView = postsList.map(({ title, publishedDate, link }, index) => {
    return (
      <Post
        key={index}
        title={title}
        publishedDate={publishedDate}
        link={link}
      />
    );
  });
  return (
    <section id='writing' className='section__main posts'>
      <h2 className='heading posts_heading'>Writing</h2>

      <div className='posts__wrapper'>{postsView}</div>
    </section>
  );
};

export default Posts;
