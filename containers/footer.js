import styled from 'styled-components';

import ContactList from '../components/contactList';

const Footer = () => {
  return (
    <FooterWrapper className='section-wrapper'>
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
    </FooterWrapper>
  );
};

const FooterWrapper = styled.footer`
  background-color: var(--clr-footer);

  .contact__wrapper {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
  }
`;

export default Footer;
