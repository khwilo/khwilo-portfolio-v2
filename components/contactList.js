import styled from 'styled-components';

const ContactList = () => {
  return (
    <ContactListWrapper>
      <li className='contact_item'>
        <a
          href='https://www.linkedin.com/in/khwilo-watai'
          target='_blank'
          rel='noreferrer noopener'
          className='contact__link nav-link'
        >
          LinkedIn
        </a>
      </li>
      <li className='contact_item'>
        <a
          href='https://github.com/khwilo'
          target='_blank'
          rel='noreferrer noopener'
          className='contact__link nav-link'
        >
          GitHub
        </a>
      </li>
      <li className='contact_item'>
        <a
          href='https://api.whatsapp.com/send?phone=+254718802061'
          target='_blank'
          rel='noreferrer noopener'
          className='contact__link nav-link'
        >
          WhatsApp
        </a>
      </li>
      <li className='contact_item'>
        <a
          href='https://twitter.com/khwilo'
          target='_blank'
          rel='noreferrer noopener'
          className='contact__link nav-link'
        >
          Twitter
        </a>
      </li>
    </ContactListWrapper>
  );
};

const ContactListWrapper = styled.ul`
  display: flex;

  .contact_item + .contact_item {
    margin-left: 1em;
  }

  .contact__link {
    display: block;
    color: var(--clr-link);
  }
`;

export default ContactList;
