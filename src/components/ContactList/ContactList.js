import React from 'react';

const ContactList = () => {
  return (
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
  );
};

export default ContactList;
