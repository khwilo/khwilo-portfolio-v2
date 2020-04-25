import React from 'react';

import ContactList from '../../components/ContactList/ContactList';
import './Footer.css';

const Footer = () => {
  return (
    <footer className='section-wrapper footer'>
      <div className='container'>
        <section id='contact' className='section__footer contact'>
          <div className='contact__wrapper'>
            <p>&copy; 2020</p>

            <div className='contact__details'>
              <ContactList />
            </div>
          </div>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
