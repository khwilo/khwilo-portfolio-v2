import styled from 'styled-components';

import Banner from '../components/banner';
import TopNav from '../components/topNav';

const Header = () => (
  <HeaderWrapper className='section-wrapper'>
    <div className='container'>
      <TopNav />
      <Banner />
    </div>
  </HeaderWrapper>
);

const HeaderWrapper = styled.header`
  background-color: var(--clr-banner);
`;

export default Header;
