import React from 'react';

const Post = ({ title, publishedDate, link }) => {
  return (
    <a
      href={link}
      target='_blank'
      rel='noreferrer noopener'
      className='post__container-link'
      aria-label='published online content'
    >
      <article className='post'>
        <h3 className='post_title'>{title}</h3>
        <p className='post__date secondary-text'>{publishedDate}</p>
      </article>
    </a>
  );
};

export default Post;
