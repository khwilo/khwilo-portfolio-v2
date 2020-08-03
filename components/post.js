import styled from 'styled-components';

const Post = ({ title, publishedDate, link }) => {
  return (
    <PostWrapper>
      <a
        href={link}
        target='_blank'
        rel='noreferrer noopener'
        className='post__container-link'
        aria-label='published online content'
      >
        <PostContainer>
          <h3 className='post_title'>{title}</h3>
          <p className='post__date secondary-text'>{publishedDate}</p>
        </PostContainer>
      </a>
    </PostWrapper>
  );
};

const PostWrapper = styled.div`
  .post__container-link {
    display: block;
  }

  .post__container-link + .post__container-link {
    margin-top: 1em;
  }

  @media (min-width: 35em) {
    .post__container-link {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }

    .post__container-link + .post__container-link {
      margin-top: 0;
    }
  }
`;

const PostContainer = styled.article`
  background: var(--clr-white);
  border-left: 4px solid var(--clr-gold);
  border-radius: 3px;
  padding: 0.2em 0.5em 0.2em 0.2em;
  transition: background-color 0.6s cubic-bezier(0.55, 0, 1, 0.45),
    box-shadow 0.6s 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);

  &:hover {
    background-color: var(--clr-post-hover);
    box-shadow: 0 10px 6px -6px var(--clr-box-shadow);
  }

  @media (min-width: 35em) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;

export default Post;
